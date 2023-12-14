const load = async ({ fetch, params }) => {
  async function fetchData() {
    let r = await fetch(
      `https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${params.id}&offset=${params.day == "0" ? "0" : "-" + params.day}&langId=6`
    );
    return await r.json();
  }
  return fetchData();
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-ea87079b.js')).default;
const universal_id = "src/routes/catchup/[id]/[day]/+page.js";
const imports = ["_app/immutable/entry/catchup-_id_-_day_-page.svelte.fb53f288.js","_app/immutable/chunks/index.ea98a15b.js","_app/immutable/chunks/stores.3d5a061d.js","_app/immutable/chunks/singletons.97976cdb.js","_app/immutable/chunks/index.978b1eea.js","_app/immutable/chunks/card2.a09c6eac.js","_app/immutable/entry/catchup-_id_-_day_-page.js.c7dd0c89.js","_app/immutable/chunks/_page.4f7cfbe7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-e4ea6e38.js.map
