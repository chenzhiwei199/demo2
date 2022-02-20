import { createApp } from 'vue';
import App from './App.vue';
import { routes } from './router';
import 'element-plus/dist/index.css';
import { createRouter, createWebHistory } from 'vue-router';
import { store } from './pinia';
import ElementPlus from 'element-plus';
let instance: any = null;
let router: any = null;
console.log('ppp', (window as any).PAGE_NAME);
function render(props = {} as any) {
  const { base, container } = props;
  const router = createRouter({
    history: createWebHistory(base || (window as any)._ROUTER_BASE),
    routes,
  });

  instance = createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount(container ? container.querySelector('#container') : '#container');
}

console.log(
  'window.__POWERED_BY_QIANKUN__: ',
  (window as any).__POWERED_BY_QIANKUN__
);
// 独立运行时，直接挂载应用
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('VueMicroApp bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  console.log('VueMicroApp mount', props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('VueMicroApp unmount');
  instance.$destroy();
  instance = null;
  router = null;
}

export async function update(props: any) {}
