const load = async ({ fetch }) => {
  let r = await fetch(
    "/playlist/json"
  );
  let data = await r.json();
  return data;
};
const ssr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 9;
const component = async () => (await import('./_page.svelte-dfbf2dfd.js')).default;
const universal_id = "src/routes/catchup/play/[id]/[cstart]/[cend]/+page.js";
const imports = ["_app/immutable/entry/catchup-play-_id_-_cstart_-_cend_-page.svelte.e069bf8e.js","_app/immutable/chunks/index.ea98a15b.js","_app/immutable/chunks/stores.3d5a061d.js","_app/immutable/chunks/singletons.97976cdb.js","_app/immutable/chunks/index.978b1eea.js","_app/immutable/chunks/usePlayerStore.2f5849c0.js","_app/immutable/entry/catchup-play-_id_-_cstart_-_cend_-page.js.934ff4a1.js","_app/immutable/chunks/_page.63afa2b6.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=9-10d14ccb.js.map
