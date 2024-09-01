<template>
  <div class="max-w-md mx-auto mt-20 mb-72">
    <div class="bg-[#EBEBEB] shadow-md rounded-lg px-8 pt-6 pb-8 mb-8">
      <div class="w-full flex justify-center">
        <img :src="logo" alt="Logo" class="w-full max-w-[80px] h-auto object-cover rounded-full" />
      </div>

      <h1 class="loginForm text-3xl font-bold mb-5 text-center text-red-400 mt-2">Login</h1>

      <!-- Username Input -->
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-semibold">Username</label>
        <input type="text" id="username" v-model="formLogin.username" placeholder="Enter your username"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          autocomplete="username" />
      </div>

      <!-- Password Input -->
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-semibold">Password</label>
        <input type="password" id="password" v-model="formLogin.password" placeholder="Enter your password"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          autocomplete="current-password" />
      </div>

      <!-- Login Button -->
      <button type="button" @click="login" title="Submit login form"
        class="w-full bg-[#F4A517] text-white font-semibold py-2 px-4 rounded hover:bg-[#e4ac42]">
        Login
      </button>

      <!-- Register Link -->
      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account?
        <RouterLink to="/register" class="text-indigo-600 hover:underline">Register</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const logo = '/images/logo/Output_v2.svg';
const formLogin = ref({
  username: "",
  password: "",
});

const router = useRouter();

const login = () => {
  axios.post('https://api.pis3th.info/api/login', formLogin.value, {
    headers: {
      "Content-Type": "application/json; charset=utf-8" // Ensure charset is included
    }
  }).then((res) => {
    console.log(res.data);
    if (res.data.status == 200) {
      console.log(res.data);
      // Handle successful login
      // Example: router.push('/dashboard'); // Redirect to another page on successful login
    }
  }).catch((error) => {
    console.log(error);
    if (error.response.status == 422) {
      alert(error.response.data.error.password + "," + error.response.data.error.username);
    } else if (error.response.status == 400) {
      alert(error.response.data.message);
    }
  });
};
</script>

<style scoped>
body {
  text-size-adjust: 100%;
}
</style>
