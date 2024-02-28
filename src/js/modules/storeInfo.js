import { getResource } from "../services/requests";

function populateStoreInfo(store_id, data) {
    const storeWrapper = document.querySelector('.store__info');
    for (let item in data) {
        const element = storeWrapper.querySelector(`#${item}`);
        if (element.classList.contains('store__info_img')) {
            if (data[item]) {
                element.innerHTML = `<img src="storage/stores/${store_id}/${data[item]}" alt="${data[item]}">`;
            } else {
                element.innerHTML = '<img src="storage/default-store.jpg" alt="Default Store Image">';
            }
        } else {
            element.textContent = data[item];
        }
    }
}

const fillStoreInfo = (id) => {
    getResource(`http://localhost:8000/stores/${id}`)
        .then(res => populateStoreInfo(id, res));
};

export { fillStoreInfo };