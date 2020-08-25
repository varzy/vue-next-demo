import Home from '../views/layouts/Home.vue';
import _import from './importer';

export const navigationRoutes = [
  {
    path: '',
    name: 'Index',
    alias: ['dashboard'],
    component: _import('index/Index'),
    meta: { title: 'Index' }
  },
  {
    path: 'todo',
    name: 'Todo',
    component: _import('todo/Index'),
    meta: { title: 'Todo' }
  },
  {
    path: 'form',
    name: 'Form',
    component: _import('form/Index'),
    meta: { title: 'Form' }
  }
];

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Index' },
    children: [...navigationRoutes]
  }
];
