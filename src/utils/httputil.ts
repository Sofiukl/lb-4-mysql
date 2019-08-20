const request = require('request');

class HttpUtil {

    constructor() {}

    async sendGetRemoteRequest(url: string) {
      let headers = {
        'Content-Type': 'application/json'
      }

      const payload = {
        uri: url,
        method: 'GET',
        headers: headers
      }
      return new Promise((resolve, reject) => {
        request(
          payload, function(err: any, httpResponse: any, body: any) {
            console.log(httpResponse.statusCode);
            if (!err && httpResponse.statusCode === 200) {
              resolve(JSON.parse(body));
            } else {
              reject(body);
            }
          }
        );
      });
    }
};

export let httpUtil = new HttpUtil();