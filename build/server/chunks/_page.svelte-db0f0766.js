import { c as create_ssr_component, a as subscribe, o as onDestroy, b as add_attribute, d as each, v as validate_component, e as escape } from './index2-124de26d.js';
import { w as writable } from './index-553613b0.js';

const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { channel } = $$props;
  const genreMap = {
    8: "Sports",
    5: "Entertainment",
    6: "Movies",
    12: "News",
    13: "Music",
    7: "Kids",
    9: "Lifestyle",
    10: "Infotainment",
    15: "Devotional",
    16: "Business",
    17: "Educational",
    18: "Shopping",
    19: "JioDarshan"
  };
  const lenMap = {
    6: "English",
    1: "Hindi",
    2: "Marathi",
    3: "Punjabi",
    4: "Urdu",
    5: "Bengali",
    7: "Malayalam",
    8: "Tamil",
    9: "Gujarati",
    10: "Odia",
    11: "Telugu",
    12: "Bhojpuri",
    13: "Kannada",
    14: "Assamese",
    15: "Nepali",
    16: "French"
  };
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  return `<a href="${"/play/" + escape(channel["channel_id"], true)}"${add_attribute("id", channel["channel_id"], 0)} data-sveltekit-preload-data="hover"><div class="card w-40 bg-gray-100 rounded-xl bg-base-100 shadow-lg h-48 mb-4 flex flex-col"><img src="${"https://jiotv.catchup.cdn.jio.com/dare_images/images/" + escape(channel["logoUrl"], true)}"${add_attribute("alt", channel["channel_name"], 0)} loading="lazy" class="h-28 mt-5 m-auto opacity-100">
	<div class="mb-5 opacity-100"><h2 class="text-center text-sm font-bold">${escape(channel["channel_name"])}</h2>
		<div class="flex justify-center space-x-1"><img src="/1.svg" alt="">
			<p class="text-xs text-center">${escape(genreMap[channel["channelCategoryId"]])}</p>
			<img src="/2.svg" alt="">
			<p class="text-xs text-center">${escape(lenMap[channel["channelLanguageId"]])}</p></div></div></div></a>`;
});
const createSearchStore = (data) => {
  const { subscribe: subscribe2, set, update } = writable({
    data,
    filtered: data,
    search: ""
  });
  return {
    subscribe: subscribe2,
    set,
    update
  };
};
const searchHandler = (store) => {
  const searchTerm = store.search.toLowerCase() || "";
  store.filtered = store.data.filter((item) => {
    return item.searchTerms.toLowerCase().includes(searchTerm);
  });
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchStore, $$unsubscribe_searchStore;
  let { data } = $$props;
  const genreMap = {
    8: "Sports",
    5: "Entertainment",
    6: "Movies",
    12: "News",
    13: "Music",
    7: "Kids",
    9: "Lifestyle",
    10: "Infotainment",
    15: "Devotional",
    16: "Business",
    17: "Educational",
    18: "Shopping",
    19: "JioDarshan"
  };
  const lenMap = {
    6: "English",
    1: "Hindi",
    2: "Marathi",
    3: "Punjabi",
    4: "Urdu",
    5: "Bengali",
    7: "Malayalam",
    8: "Tamil",
    9: "Gujarati",
    10: "Odia",
    11: "Telugu",
    12: "Bhojpuri",
    13: "Kannada",
    14: "Assamese",
    15: "Nepali",
    16: "French"
  };
  const searchProducts = data.result.map((e) => ({
    ...e,
    searchTerms: `${e.channelCategoryId} ${e.channel_id} ${e.channel_name} ${genreMap[e.channelCategoryId]} ${lenMap[e.channelLanguageId]}`
  }));
  const searchStore = createSearchStore(searchProducts);
  $$unsubscribe_searchStore = subscribe(searchStore, (value) => $searchStore = value);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  onDestroy(() => {
    unsubscribe();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_searchStore();
  return `<title>Watch Your Favorite Tv Channels For Free</title>
	<div class="container"><div class="flex flex-row mb-3 ml-1 gap-3 justify-center align-middle"><input type="search" id="search" class="relative w-[100%] col-span-4 block mx-4 rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-600 dark:placeholder:text-neutral-700" placeholder="Search"${add_attribute("value", $searchStore.search, 0)}></div>
	<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto">${each($searchStore.filtered, (channel) => {
    return `${validate_component(Card, "Card").$$render($$result, { channel }, {}, {})}`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-db0f0766.js.map
