import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RemoteReq extends Model {
  
  @property({
    type: 'string',
    required: true,
  })
  page: string;

  @property({
    type: 'string',
    required: true,
  })
  per_page: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RemoteReq>) {
    super(data);
  }
}

export interface RemoteReqRelations {
  // describe navigational properties here
}

export type RemoteReqWithRelations = RemoteReq & RemoteReqRelations;
