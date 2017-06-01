import {environment} from "../environments/environment";

export class API {

  static mode = environment.production ? 'prod' : 'dev';
  static api = {
    "FetchCategory": {
      "prod": "/blog_api/category/list",
      "dev": "http://localhost:8080/blog_api/category/list"
    },
    "SaveCategory": {
      "prod": "/blog_api/category/save",
      "dev": "http://localhost:8080/blog_api/category/save"
    },
    "DeleteCategory": {
      "prod": "/blog_api/category/delete",
      "dev": "http://localhost:8080/blog_api/category/delete"
    },
    "FetchPost": {
      "prod": "/blog_api/post/list",
      "dev": "http://localhost:8080/blog_api/post/list"
    },
    "SavePost": {
      "prod": "/blog_api/post/save",
      "dev": "http://localhost:8080/blog_api/post/save"
    },
    "DeletePost": {
      "prod": "/blog_api/post/delete",
      "dev": "http://localhost:8080/blog_api/post/delete"
    },
    "GetResourceLevel": {
      "prod": "/resources/level/list",
      "dev": "http://localhost:8080/resources/level/list"
    },
  };

  static getAPI(name: string) {
    return API.api[name][API.mode];
  }

}
