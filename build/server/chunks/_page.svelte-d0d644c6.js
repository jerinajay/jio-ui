import { c as create_ssr_component, a as subscribe } from './index2-124de26d.js';
import { p as page } from './stores-d4ff87c2.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params;
  $$unsubscribe_page();
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d0d644c6.js.map
