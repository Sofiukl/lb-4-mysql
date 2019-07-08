import { DataSource } from "loopback-datasource-juggler";
import {Response} from "../models";

export default class RepositoryHelper {

  public readonly dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async query(sql: string, params?: any, options?: any): Promise<void> {
    return new Promise((resolve, reject) => {
        const response: any = new Response();
        const connector = this.dataSource.connector!;
        connector.execute!(sql, params, options, (err: any, ...results: any) => {
            console.log(`err: ${err}`)
            if (err) {
                response.setError(true);
                response.setMessage(err);
                return reject(response);
            }
            
            response.setError(false);
            response.setResult(results[0]);
    
            console.log(`Response: ${JSON.stringify(response)}`);

            
            if (results.length === 0) {
                return resolve(response);
            }

            if (results.length === 1) {
                return resolve(response);
            }

            resolve(results);
      });
    });
  }
}