<template>
  <div class="max-w-md mx-auto mt-20 mb-72 ">
    <form @submit.prevent="login" class="bg-[#EBEBEB] shadow-md rounded-lg px-8 pt-6 pb-8 mb-8">
      <div class="w-ful flex justify-center">
        <img src="/public/images/./logo/logo.png" alt="Image" class="w-full max-w-[80px] h-auto object-cover rounded-ful">
      </div>
     
      <h1 class="loginForm text-3xl font-bold mb-5 text-center text-red-400 mt-2">Login</h1>
 
      
      
      <!-- Username Input -->
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-semibold">Username</label>
        <input type="text" id="username" v-model="username" placeholder="Enter your username" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
      </div>
      
      <!-- Password Input -->
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-semibold">Password</label>
        <input type="password" id="password" v-model="password"  placeholder="Enter your password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
      </div>
      
      <!-- Login Button -->
      <button type="submit" class="w-full bg-[#F4A517] text-white font-semibold py-2 px-4 rounded hover:bg-[#e4ac42]">Login</button>
      
      <!-- Register Link -->
      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account? <RouterLink to="/register" class="text-indigo-600 hover:underline">Register</RouterLink>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  // Simulated login logic
  if (username.value === 'demo' && password.value === 'password') {
    router.push('/'); // Redirect to home page after successful login
  } else {
    alert('Invalid username or password');
    username.value = ''; // Clear username field on unsuccessful login
    password.value = ''; // Clear password field on unsuccessful login
  }
};
</script>

<style scoped>
/* Adjusting form width */
.max-w-md {
  width: 400px;
}

.loginForm{
    font-family: 'Palanquin Dark';
     font-style: normal;
     font-weight: 1000;
}
</style>
