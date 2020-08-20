import Home from '../views/layouts/Home.vue';
import _import from './importer';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Index' },
    children: [
      {
        path: '',
        name: 'Index',
        alias: ['dashboard'],
        component: _import('index/Index')
      },
      {
        path: 'todo',
        name: 'Todo',
        component: _import('todo/Index')
      }
    ]
  }
];
