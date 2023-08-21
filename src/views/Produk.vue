<!-- <template> -->
    <!--Product-->

        <!-- <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar5.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Pop It</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 35.000</p>
              </a>
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar6.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Aestetik</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 25.000 - Rp. 30.000</p>
              </a>
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar7.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Polos</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 15.000 - Rp. 25.000</p>
              </a>
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar8.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Doraemon</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 45.000 - Rp. 50.000</p>
              </a> -->

              <!-- More products... -->
            <!-- </div>
          </div>
        </div>

        <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>
        

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar12.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Sapi Lucu</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 35.000</p>
            </a>
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar13.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Lucu</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 25.000 - Rp. 30.000</p>
            </a>
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar14.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Iphone</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 25.000 - Rp. 50.000</p>
            </a>
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar15.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Cantik dan Lucu</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 35.000 - Rp. 40.000</p>
            </a> -->

            <!-- More products... -->
          <!-- </div>
        </div>
      </div>
</template> -->

<template>
  <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5">Product</h1>
  <div class="grid grid-cols-4 gap-4">
    <div class=" flex flex-container text-center" v-for="product in getProduct.data" :key="product.id">
      <article
        class="mx-auto my-4 flex w-full flex-col overflow-hidden border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <img
          src="../assets/casing hp.jpg"
          class="h-56 w-full object-cover" alt="" />
        <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{{ product.name }}</h3>
        <p class="mb-4 text-base font-light">{{ product.slug }}</p>
        <h3 class="mt-4 mb-3 text-l font-semibold xl:text-2xl">Rp {{ product.base_price }}</h3>
        <router-link :to="'/singleproduct/' + product.slug">
          klik
        </router-link>
      </article>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('product', ['getProduct']),
  },
  methods: {
    ...mapActions('product', ['fetchProduct']),
  },
  created() {
    this.fetchProduct();
  },
}
</script>