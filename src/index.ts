import {Lb4MysqlApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import { TaskRepository } from './repositories';
import { MysqldbDataSource } from './datasources';
import { ReqLogger } from './middlewares/request.logger';
import { ProjectAccess } from './middlewares/project.access';

export {Lb4MysqlApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4MysqlApplication(options);
  await app.boot();
  await app.start();

  app.bind('repositories.TaskRepository').toClass(TaskRepository);
  app.bind('datasources.mysqldb').toClass(MysqldbDataSource);
  app.bind('middleware.reqlogger').toClass(ReqLogger);
  app.bind('middleware.projectaccess').toClass(ProjectAccess);

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
