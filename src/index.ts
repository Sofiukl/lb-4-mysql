import {Lb4MysqlApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import { TaskRepository } from './repositories';
import { MysqldbDataSource } from './datasources';

export {Lb4MysqlApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4MysqlApplication(options);
  await app.boot();
  await app.start();

  app.bind('repositories.TaskRepository').toClass(TaskRepository);
  app.bind('datasources.mysqldb').toClass(MysqldbDataSource);

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
