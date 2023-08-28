import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
//import SingleProduk from "../views/SingleProduk.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Contact from "../views/Contact.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import Merk from "../views/Merk.vue";
import Kategori from "../views/Kategori.vue";
import Profile from "../views/Profile.vue";
import PageOrder from "../views/PageOrder.vue";

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
        meta: {requireGuest: true},
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    // {
    //     path: "/singleproduk",
    //     name: "SingleProduk",
    //     component: SingleProduk,
    // },
    {
        path: "/singleproduct",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/kontak",
        name: "Contact",
        component: Contact,
    },
    {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue"),
    meta: { requiresLogin: true },
    },
    {
        path:"/order/:orderCode",
        name: "PageOrder",
        component: PageOrder,
        props: true,
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
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
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
//     if (to.meta.requireRegister && store.getters["auth1/isAuthenticated"]) {
//         next("/"); // redirect to home
//     } else {
//         next();
//     }
// });

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && store.getters["auth/isAuthenticated"]) {
        next("/login"); // redirect to home
    } else {
        next();
    }
});

function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }

export default router;
