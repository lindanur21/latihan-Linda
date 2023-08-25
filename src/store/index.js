import { createStore } from "vuex";
import auth from "./modules/auth";
import merk from "./modules/merk";
import kategori from "./modules/kategori";
import product from "./modules/product";
//import keranjang from "./modules/keranjang";
import cart from "./modules/cart";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        merk,
        kategori,
        product,
        //keranjang,
        cart
    },
});

export default store;