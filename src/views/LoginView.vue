<template>
  <div class="max-w-md mx-auto mt-20 mb-72">
    <form @submit.prevent="login" class="bg-[#EBEBEB] shadow-md rounded-lg px-8 pt-6 pb-8 mb-8">
      <div class="w-full flex justify-center">
        <img :src="logo" alt="Logo" class="w-full max-w-[80px] h-auto object-cover rounded-full" />
      </div>

      <h1 class="loginForm text-3xl font-bold mb-5 text-center text-red-400 mt-2">Login</h1>

      <!-- Username Input -->
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-semibold">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>

      <!-- Password Input -->
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-semibold">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>

      <!-- Login Button -->
      <button type="submit" class="w-full bg-[#F4A517] text-white font-semibold py-2 px-4 rounded hover:bg-[#e4ac42]">
        Login
      </button>

      <!-- Register Link -->
      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account?
        <RouterLink to="/register" class="text-indigo-600 hover:underline">Register</RouterLink>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const logo = ref('/images/logo/Output_v2.svg');
const router = useRouter();

const login = async () => {
  try {
    // Send login request to the API
    const response = await axios.post('https://api.pis3th.info/api/login', {
      username: username.value,
      password: password.value,
    });

    // Log the full response to inspect its structure
    console.log('API Response:', response);

    // Check if the API response indicates a successful login
    if (response.status === 200 && response.data?.status === 'success') {
      // Handle user-specific routing
      if (username.value === 'testuser') {
        router.push('/cms-dashboard');
        alert('Logged in as CMS User');
      } else if (username.value === 'admin') {
        router.push('/admin-dashboard');
        alert('Logged in as Admin');
      }

      // Output the user data for further checks
      const userData = response.data.user;
      console.log('User data:', userData);
    } else {
      // Display specific message or fallback error
      alert(response.data.message || 'Invalid username or password');
    }
  } catch (error) {
    // Log the error to the console for a deeper inspection
    console.error('Login error:', error);
    if (error.response) {
      console.log('Error response data:', error.response.data);
      alert(`Error: ${error.response.data.message || 'Invalid credentials or server error.'}`);
    } else if (error.request) {
      alert('No response from the server. Please check your network connection.');
    } else {
      alert('An error occurred during login. Please try again later.');
    }
  }
};
</script>
