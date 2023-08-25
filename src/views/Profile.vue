<template>
  <center>
    <div class="m-10 max-w-sm">
      <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <div class="relative mx-auto w-36 rounded-full">
          <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
          <img class="mx-auto h-auto w-full rounded-full" src="../assets/gambar_profile.jpg" alt="" />
        </div>
        <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ user.name }}</h1>
        <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">{{ user.email }}</h3>
        <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Pelajar SMK Assalaam Bandung</p>
        <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li class="flex items-center py-3 text-sm">
            <span>Joined On</span>
            <span class="ml-auto">Aug 23, 2023</span>
          </li>
        </ul>
      </div>
    </div>
    </center>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters("auth", ["getUser"]),
        user() {
            return this.getUser;
        },
    },
    methods: {
        ...mapActions("auth", ["getUserInfo"]),
    },
    async mounted() {
        // fetch user information
        const user = await this.getUserInfo();

        // if user information is retrieved, update the store
        if (user) {
            this.$store.commit("auth/SET_USER", user);
        }
    },
};
</script>