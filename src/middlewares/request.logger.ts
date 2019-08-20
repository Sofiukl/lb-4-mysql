import {Request, Response} from 'express';

export class ReqLogger {
    constructor() {}
    logRequest(request: Request) {
        if (request.query.where) {
            const projectid = (request.query.where.projectid) || {};
            console.log(`request received from user ${projectid}`);
        }
    }
}