import { Request} from 'express';
import {Response} from '../models/response.model';
import { HttpErrors } from '@loopback/rest';
import { AuthorizeErrorKeys } from '../error-keys';

export class ProjectAccess {
    constructor() {}
    verifyAccess(request: Request) {
       if (request.query.where) {
        const projectid = (request.query.where.projectid) || {};
        console.log(projectid);
        if (projectid != 1){
             throw new HttpErrors.Forbidden(AuthorizeErrorKeys.NotAllowedAccess);
        }
       }
    }
}