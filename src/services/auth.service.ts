import { Auth } from "../models/Auth";
import { DATABASE_CONTEXT } from "./databaseContext.service";

export class AuthService {
  constructor() { }
  
  public parseAuth(auth: Auth): Auth {
    return new Auth(auth.login, auth.senha);
  }

  public async get(auth: Auth): Promise<boolean> {
    const query: string = 'SELECT * FROM usuarios WHERE login = $1 AND senha = MD5($2)'
    const params: Array<any> = [auth.login, auth.senha];
    
    const result = await DATABASE_CONTEXT.query(query, params);

    if (result.rowCount > 0) {
      return true;
    }
    else {
      return false;
    }
  }
}