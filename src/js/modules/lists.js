import { getResource } from "../services/requests";
import { fillStoreInfo } from "./storeInfo";
import { state } from "../script";

function populateStores(parent, data) {
    // Постраничное заполнение списка объектов
    const btnPrev = document.querySelector('#storeListPrev'),
        btnNext = document.querySelector('#storeListNext'),
        itemsPerPage = 20,
        totalPages = Math.ceil(data.length / itemsPerPage),
        listBlock = document.querySelector(parent),
        pageNumber = document.querySelector('#storesPage');
    let currentPage = 1;

    pageNumber.textContent = `${currentPage} / ${totalPages}`;

    function fillPage(page) {
        // Заполнение страницы списка
        const startIndex = (page - 1) * itemsPerPage,
            endIndex = startIndex + itemsPerPage,
            pageItems = data.slice(startIndex, endIndex);
        
        for (let item of pageItems) {
            const listItem = document.createElement('div');
            
            listItem.classList.add('store__list_item')
            listItem.innerHTML = `<span>${item['store_id']}</span><span>${item['store_name']}</span>`;
            listItem.addEventListener('click', () => {
                state['storeId'] = item['store_id'];
                fillStoreInfo(state['storeId']);
            });
    
            listBlock.appendChild(listItem);
        }       
    }

    fillPage(currentPage);

    // Обработчики кнопок управления списком
    btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage -= 1;
            pageNumber.textContent = `${currentPage} / ${totalPages}`;
            listBlock.innerHTML = '<div class="store__list_item"><span>ID</span><span>Название</span></div>';
            fillPage(currentPage);
        } else {
            currentPage = 1;
        }
    });
    btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage += 1;
            pageNumber.textContent = `${currentPage} / ${totalPages}`;
            listBlock.innerHTML = '<div class="store__list_item"><span>ID</span><span>Название</span></div>';
            fillPage(currentPage);
        } else {
            currentPage = totalPages;
        }
    });
}

const fillStoreList = (parent) => {
    getResource('http://localhost:8000/stores/')
        .then(res => populateStores(parent, res));
};

export { fillStoreList };