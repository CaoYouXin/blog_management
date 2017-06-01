import { Component } from '@angular/core';
import {API} from "../api/api.const";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '博客管理';

  categoryTemplate = {
    fetchUrl: API.getAPI("FetchCategory"),
    saveUrl: API.getAPI("SaveCategory"),
    deleteUrl: API.getAPI("DeleteCategory"),
    cols: [
      {name: 'id', text: 'ID', type: 'number', disabled: true},
      {name: 'name', text: '分类名称', type: 'text'},
      {name: 'create', text: '创建时间', type: 'date', disabled: true},
      {name: 'update', text: '修改时间', type: 'date', disabled: true},
      {name: 'script', text: '脚本', type: 'text', width: '100px'},
      {name: 'url', text: 'URL', type: 'text', width: '100px'},
    ],
    key: 'id',
    editorId: 'CategoryEditor',
    comboId: 'CategoryCombo'
  };

  postTemplate = {
    fetchUrl: API.getAPI("FetchPost"),
    saveUrl: API.getAPI("SavePost"),
    deleteUrl: API.getAPI("DeletePost"),
    cols: [
      {name: 'id', text: 'ID', type: 'number', disabled: true},
      {name: 'name', text: 'Post名称', type: 'text'},
      {name: 'create', text: '创建时间', type: 'date', disabled: true},
      {name: 'update', text: '修改时间', type: 'date', disabled: true},
      {name: 'url', text: 'URL', type: 'text', width: '100px', prefix: 'http://localhost:8080/resources/r'},
      {name: 'categoryId', text: '分类ID', type: 'number', disabled: true},
      {name: 'categoryName', text: '分类名称', type: 'text', combo: 'categoryId', key: 'id', value: 'name', url: API.getAPI("FetchCategory")},
      {name: 'type', text: '类型', type: 'text', inplaceCombo: 'name', data: [{name: 'App'}, {name: 'Article'}]},
      {name: 'script', text: '脚本', type: 'text', width: '100px', prefix: 'http://localhost:8080/resources/r'},
      {name: 'brief', text: '简介', type: 'text', width: '100px'},
      {name: 'screenshot', text: '截图', type: 'text', width: '100px'},
      {name: 'platform', text: '平台', type: 'text', inplaceCombo: 'name', data: [{name: 'All'}, {name: 'Pc'}, {name: 'Mobile'}]},
      {name: 'like', text: 'Like', type: 'number', disabled: true},
      {name: 'resourceLevelId', text: '资源级别ID', type: 'number', disabled: true},
      {name: 'resourceLevelName', text: '资源级别名称', type: 'text', combo: 'resourceLevelId', key: 'id', value: 'name', url: API.getAPI("GetResourceLevel")},
    ],
    key: 'id',
    editorId: 'CategoryEditor',
    comboId: 'CategoryCombo'
  };

}
