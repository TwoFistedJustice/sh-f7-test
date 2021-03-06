import HomePage from './components/Home.vue';
import Grid from './components/Grid.vue';
import Item from './components/Item.vue';

import PanelLeftPage from './components/panel-left.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },

  {path: '/supplies/',
  component: Grid},

  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },

  {
    path: '/item/',
    component: Item,
  },
];
