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

const login = async () => { 
  try {
    const response = await axios.post('https://api.pis3th.info/api/login', formLogin.value, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });

    // Check for successful response
    if (response.status === 200) {
      const { access_token } = response.data;

      // Save the token to localStorage
      localStorage.setItem('authToken', access_token);

      // Optionally set token for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

      // Redirect to the dashboard or another page on successful login
      router.push('/AplicationWorkView');
    } else {
      // Handle unexpected status codes
      console.error('Unexpected response status:', response.status, 'Response:', response.data);
      alert('An unexpected error occurred. Please try again.');
    }
  } catch (error) {
    // Enhanced error handling
    if (error.response) {
      console.error('API Error:', error.response);
      
      // Provide specific error messages based on status code
      if (error.response.status === 422) {
        alert(`Validation Error: ${error.response.data.error.password || ''} ${error.response.data.error.username || ''}`);
      } else if (error.response.status === 400) {
        alert(`Bad Request: ${error.response.data.message || 'An error occurred.'}`);
      } else {
        alert(`Error ${error.response.status}: ${error.response.data.message || 'An unexpected error occurred.'}`);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
      alert('Network Error: No response received from the server.');
    } else {
      console.error('Error setting up request:', error.message);
      alert('Error setting up request: ' + error.message);
    }
  }
};


</script>

<style scoped>
body {
  text-size-adjust: 100%;
}
</style>
