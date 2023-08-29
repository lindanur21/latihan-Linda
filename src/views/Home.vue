<template>

    <!--Banner-->

    <!-- <div
      id="carouselExampleCaptions"
      class="relative"
      data-te-carousel-init
      data-te-ride="carousel"> -->
      <!--Carousel items-->
      <!-- <div
        class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"> --> 
        <!--First item-->
        <!-- <div
          class="relative float-left -mr-[50%] w-full transition-transform duration-[300ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active
          data-te-carousel-item
          style="backface-visibility: hidden">
          <img
            src="../assets/gambar10.jpg"
            class="block w-full"
            alt="..." />
        </div>
        </div>
    </div> -->
    <!-- Hero section with background image, heading, subheading and button -->
    <header>
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat"
      style="
      background-position: 50%;
      background-image: url('https://4.bp.blogspot.com/-y25M7Cl1KCk/V1azBnh9I7I/AAAAAAAACzU/lTI-Is6n5xsQBo3cjjSmv-3VZgtjq3Z0wCLcB/s1600/casing-hp-custom-1.png');
      height: 350px;
    ">
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.75)">
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1 class="mb-6 text-5xl font-bold">Selamat Datang</h1>
            <!-- <button
              type="button"
              class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
              Get started
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </header>
    <br>
    <br>

    <!--Product-->

    <div class="bg-white">
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
          </a>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <a href="/produk">Lihat Lainnya</a>
          </button>
        </div>
      </div>
    </div>
</template>