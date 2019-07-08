export class Response {
    
    constructor() {}

    private error: boolean;
    private result: Array<any>;
    private message: any;

    setError(error: boolean) {
        this.error = error;
    }
    getError(): boolean {
        return this.error;
    }
    setResult(result: any) {
        this.result = result;
    }
    getResult(): any {
        return this.result;
    }
    setMessage(message: any) {
        this.message = message;
    }
    getMessage(): any {
        return this.message;
    }
}