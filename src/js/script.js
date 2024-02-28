import { fillStoreList, filterStoreList } from "./modules/lists";
import { fillStoreInfo } from "./modules/storeInfo";

let state = {
    storeId: 0
};

window.addEventListener('DOMContentLoaded', () => {
    fillStoreList('.store__list');
    if (state['storeId']) {
        fillStoreInfo(state['storeId']);
    }
});

export { state };