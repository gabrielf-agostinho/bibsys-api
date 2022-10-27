import { Pool, PoolClient, QueryResult } from 'pg';

const pool: Pool = process.env.ENVIRONMENT == 'DEVELOPMENT' 

? new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bibsysdb',
  password: 'postgres',
  port: 5432
})

: new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bibsysdb',
  password: 'postgres',
  port: 5432
})

class DataBaseContext {
  async query(text: string, params: Array<any>): Promise<QueryResult> {
    const start: number = Date.now();
    const res: QueryResult = await pool.query(text, params);
    const duration: number = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  }

  async getClient(): Promise<PoolClient> {
    const client: PoolClient | any = await pool.connect();
    const query = client.query;
    const release = client.release;

    // É setado um timeout de 5 segundos, depois disso será logueado a última query desse client
    const timeout = setTimeout(() => {
      console.error(`A útlima query executada por esse client foi: ${client.lastQuery}`)
    }, 5000);
    // Monkey patch no método de query para manter o registro da última query executada
    client.query = (...args: Array<any>) => {
      client.lastQuery = args
      return query.apply(client, args)
    }
    client.release = () => {
      // Limpa o timeout
      clearTimeout(timeout);
      // seta os métodos para a versão pré monkey patch
      client.query = query;
      client.release = release;
      return release.apply(client);
    }
    return client;
  }
}

export const DATABASE_CONTEXT: DataBaseContext = new DataBaseContext();