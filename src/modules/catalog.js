import getData from "./getData";
import renderGoods from "./renderGoods";
import {
    categoryFilter
} from "./filters";

const catalog = () => {
    const catalogButton = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog')
    const catalogModalList = document.querySelectorAll('.catalog-list > li')

    let isOpen = false;

    catalogButton.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            catalogModal.style.display = 'block'
        } else {
            catalogModal.style.display = ''
        }
    })

    catalogModalList.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;
            getData().then((data) => {
                renderGoods(categoryFilter(data, text));
            })
        })
    })
}

export default catalog