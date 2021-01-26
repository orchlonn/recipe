require("@babel/polyfill");
import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from './view/searchView';
/**
 * web app tuluw
 * hailtiin query, vr dun
 * tuhain vzvvlj bga jor
 * zahialj bgaa joriin nairlaguud
 */

const state = {};

const controlSearch = async () => {
    // 1) webees hailtiin tvlhvvr vgiig gargaj awna
    const query = searchView.getInput();

    if (query) {
        // 2) great an object that do search
        state.search = new Search(query);

        // 3) prepare UI for searchin
        searchView.clearSearchQuery();
        searchView.clearSearchResult();
        renderLoader(elements.searchResultDiv);

        // 4) do search
        await state.search.doSearch();
        clearLoader();

        // 5) show result from search
        searchView.renderRecipes(state.search.result);
    }
};

elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});