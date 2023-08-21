import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import SingleProduk from "../views/SingleProduk.vue";
import Contact from "../views/Contact.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import Merk from "../views/Merk.vue";
import Kategori from "../views/Kategori.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {requireGuest: true},
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/singleproduk/:slug",
        name: "SingleProduk",
        component: SingleProduk,
    },
    {
        path: "/kontak",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/merk",
        name: "Merk",
        component: Merk,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && store.getters["auth/isAuthenticated"]) {
        next("/"); // redirect to home
    } else {
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireLogin && store.getters["auth/isAuthenticated"]) {
//         next("/login"); // redirect to home
//     } else {
//         next();
//     }
// });

export default router;
