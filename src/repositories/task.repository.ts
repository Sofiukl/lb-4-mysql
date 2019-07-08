import {DefaultCrudRepository, Count} from '@loopback/repository';
import {Task, TaskRelations} from '../models';
import {MysqldbDataSource} from '../datasources';
import {inject} from '@loopback/core';
import RepositoryHelper from './helper.repository';
import {Response} from "../models";


export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype.id,
  TaskRelations
> {
  helper: RepositoryHelper;
  constructor(
    @inject('datasources.mysqldb') public dataSource: MysqldbDataSource,
  ) {
    super(Task, dataSource);
    this.helper = new RepositoryHelper(this.dataSource);
  }

  async query(sql: string, params?: any, options?: any): Promise<Response> {
    try {
      const response: any = await this.helper.query(sql, params, options);
      return response;
    } catch (err) {
      return err;
    }
  }
}
