const load = async ({ fetch }) => {
  let r = await fetch(
    "/playlist/json"
  );
  return await r.json();
};
const ssr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 2;
const component = async () => (await import('./_page.svelte-db0f0766.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/entry/_page.svelte.234e01e7.js","_app/immutable/chunks/index.ea98a15b.js","_app/immutable/chunks/index.978b1eea.js","_app/immutable/entry/_page.js.0506e731.js","_app/immutable/chunks/_page.a8c0ce60.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=2-2352a85e.js.map
