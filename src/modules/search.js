import getData from "./getData";
import renderGoods from "./renderGoods";
import {
    searchFilter
    //searchFilterPriceRange,
} from "./filters";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')
    // My search by price - day-3
    // const filterPriceInput = document.querySelectorAll('.filter-price_input');

    // const maxn = getData().then((data) => {
    //     let n
    //     n = data[0].price;
    //     data.forEach((item) => {
    //         if (n < (item).price) {
    //             n = (item).price
    //         }
    //     })
    //     return n
    // })

    // maxn.then((value) => {
    //     let min = 0
    //     let max = value

    //     filterPriceInput.forEach(item => {
    //         item.addEventListener('input', event => {
    //             const target = event.target;
    //             if (target.id === 'min') {
    //                 min = target.value
    //             } else if (target.id === 'max') {
    //                 max = target.value
    //             }
    //             getData().then((data) => {
    //                 renderGoods(searchFilterPriceRange(data, min, max));
    //             })
    //         })
    //     })
    // })

    searchInput.addEventListener('input', (event) => {
        const target = event.target;
        const value = target.value;

        getData().then((data) => {
            renderGoods(searchFilter(data, value));
        })
    })

}

export default search