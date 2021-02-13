import { MenuItem } from './type';

const menuConfig:MenuItem[] = [{
  id: 'file',
  name: '文件',
  children:[
    {id:'newFile', name: '新建'}
    ,{id:'openFile', name: '打开'}
    ,{id:'saveFile', name: '保存'}
  ]
},{
  id: 'edit',
  name: '编辑',
  children:[
    {id:'undo', name: '撤销'}
    ,{id:'redo', name: '重做'}
    ,{id:'cut', name: '剪切'}
    ,{id:'copy', name: '复制'}
    ,{id:'paste', name: '粘贴'}
  ]
},{
  id: 'selection',
  name: '选择',
  children: [
    {id: 'all', name: '全选'}
  ]
}];

export default menuConfig;