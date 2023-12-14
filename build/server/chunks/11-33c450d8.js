const load = async ({ fetch }) => {
  let r = await fetch(
    // 'https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone'
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

const index = 11;
const component = async () => (await import('./_page.svelte-bb05e4f4.js')).default;
const universal_id = "src/routes/play/[id]/+page.js";
const imports = ["_app/immutable/entry/play-_id_-page.svelte.8847bd3d.js","_app/immutable/chunks/index.ea98a15b.js","_app/immutable/chunks/stores.3d5a061d.js","_app/immutable/chunks/singletons.97976cdb.js","_app/immutable/chunks/index.978b1eea.js","_app/immutable/chunks/usePlayerStore.2f5849c0.js","_app/immutable/entry/play-_id_-page.js.934ff4a1.js","_app/immutable/chunks/_page.e56310ad.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=11-33c450d8.js.map
