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
      <button type="button" @click="handleLogin" :disabled="loading" title="Submit login form"
        class="w-full bg-[#F4A517] text-white font-semibold py-2 px-4 rounded hover:bg-[#e4ac42]">
        <span v-if="loading">Logging in...</span>
        <span v-else>Login</span>
      </button>

      <!-- Register Link -->
      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account?
        <RouterLink to="/register" class="text-indigo-600 hover:underline">Register</RouterLink>
      </p>

      <!-- Logout Button (Optional) -->
      <button v-if="isAuthenticated" type="button" @click="handleLogout" class="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 mt-4">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const logo = '/images/logo/Output_v2.svg';
const formLogin = ref({
  username: "",
  password: "",
});

const router = useRouter();
const { login, logout, loading, isAuthenticated } = useAuth();

// Handle login function
const handleLogin = async () => {
  try {
    await login(formLogin.value);
    // Optionally, redirect if login is successful
    router.push('/AplicationWorkView'); // Adjust the path as needed
  } catch (error) {
    console.error('Login error:', error);
  }
};

// Handle logout function
const handleLogout = async () => {
  try {
    await logout();
    // Optionally, redirect after logout
    router.push('/login'); // Adjust the path as needed
  } catch (error) {
    console.error('Logout error:', error);
  }
};
</script>

<style scoped>
body {
  text-size-adjust: 100%;
}
</style>
