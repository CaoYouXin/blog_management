import {environment} from "../environments/environment";

export class API {

  static mode = environment.production ? 'prod' : 'dev';
  static api = {
    "FetchCategory": {
      "prod": "/blog/category/list",
      "dev": "http://localhost:8080/blog/category/list"
    },
    "SaveCategory": {
      "prod": "/blog/category/save",
      "dev": "http://localhost:8080/blog/category/save"
    },
    "DeleteCategory": {
      "prod": "/blog/category/delete",
      "dev": "http://localhost:8080/blog/category/delete"
    },
    "FetchPost": {
      "prod": "/blog/post/list",
      "dev": "http://localhost:8080/blog/post/list"
    },
    "SavePost": {
      "prod": "/blog/post/save",
      "dev": "http://localhost:8080/blog/post/save"
    },
    "DeletePost": {
      "prod": "/blog/post/delete",
      "dev": "http://localhost:8080/blog/post/delete"
    }
  };

  static getAPI(name: string) {
    return API.api[name][API.mode];
  }

}
