<template>
  <div>
    <!-- Header -->
    <header class="bg-[#F4A517] w-full h-20 flex items-center justify-between px-4 md:px-6 lg:px-8">
      <div class="flex items-center">
        <!-- Sidebar Toggle Button (for Mobile) - Positioned Left of Logo -->
        <button @click="isSidebarOpen = !isSidebarOpen" class="md:hidden text-gray-800 focus:outline-none mr-4">
          <Icon :icon="isSidebarOpen ? 'bi:caret-left-fill' : 'bi:caret-right-fill'" class="w-6 h-6"/>
        </button>
        <div class="w-12 h-12 rounded-full flex items-center justify-center ml-2 md:ml-5">
          
            <img src="/public/images/./logo/logo.png" alt="Image" class="w-full max-w-[70px] h-auto object-cover rounded-ful">
        
        </div>
        <ul class="hidden md:flex gap-5 pl-5 items-center" style="font-family: 'Khmer OS Battambang', sans-serif;">
          <li>
            <RouterLink :to="`/`" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/' }">ទំព័រដើម</RouterLink>
          </li>
          <li>
            <RouterLink to="/News" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/News' }">ព័ត៏មានថ្មីៗ</RouterLink>
          </li>
          <li>
            <RouterLink to="/AplicationWorkView" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/AplicationWorkView' }">កម្មវិធីការងារ</RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex gap-2 md:gap-4 items-center">
        <ul class="flex gap-2 md:gap-4 items-center">
          <!-- Notification Icon -->
          <li class="flex items-center gap-2">
            <Icon class="w-6 h-6 md:w-8 md:h-8" icon="mingcute:notification-fill"/>
          </li>
          <!-- Settings Icon -->
          <li class="flex items-center gap-2">
            <Icon class="w-6 h-6 md:w-8 md:h-8" icon="uil:setting"/>
          </li>
          <!-- Register Button -->
          <li>
            <button class="bg-white text-orange-500 hover:bg-gray-100 font-semibold py-1 px-2 md:py-2 md:px-4 rounded">
              <RouterLink to="/register">Register</RouterLink>
            </button>
          </li>
          <!-- Login Button -->
          <li>
            <button class="bg-gray-200 text-orange-500 hover:bg-gray-300 font-semibold py-1 px-2 md:py-2 md:px-4 rounded">
              <RouterLink to="/login">Login</RouterLink>
            </button>
          </li>
        </ul>
      </div>
    </header>

    <!-- Sidebar Menu (Left Slide-In) -->
    <aside class="md:hidden fixed inset-y-0 left-0 w-64 bg-[#F4A517] z-50 transform transition-transform duration-300 ease-in-out" :class="{ '-translate-x-full': !isSidebarOpen }">
      <div class="flex flex-col h-full">
        <div class="mt-20">
          <div class="w-ful flex justify-center mb-10">
            <img src="/public/images/./logo/logo.png" alt="Image" class="w-full max-w-[70px] h-auto object-cover rounded-ful">
          </div>
        
          <!-- Navigation Links -->
          <ul>
            <li class="" @click="navigateAndClose('/')">
              <RouterLink :to="`/`" class="text-white  px-4 hover:text-gray-200" :class="{ 'underline': $route.path === '/' }">ទំព័រដើម</RouterLink>
            </li>
            <li class="pt-4" @click="navigateAndClose('/News')">
              <RouterLink to="/News" class="text-white  px-4 hover:text-gray-200" :class="{ 'underline': $route.path === '/News' }">ព័ត៏មានថ្មីៗ</RouterLink>
            </li>
            <li class="pt-4" @click="navigateAndClose('/AplicationWorkView')">
              <RouterLink to="/AplicationWorkView" class="text-white  px-4 hover:text-gray-200" :class="{ 'underline': $route.path === '/AplicationWorkView' }">កម្មវិធីការងារ</RouterLink>
            </li>
          </ul>
        </div>
        <!-- Close Sidebar Button -->
        <div class="mt-auto mb-4">
          <button @click="isSidebarOpen = false" class="text-white block py-2 px-4 w-full text-left">
            <Icon icon="ic:round-close" class="w-6 h-6 mr-2"/>
            បិទម៉ូតេ
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const isSidebarOpen = ref(false);

const navigateAndClose = (path) => {
  // Navigate to the specified route
  $router.push(path);
  // Close the sidebar
  isSidebarOpen.value = false;
};
</script>

<style scoped>
/* Scoped styles can go here if necessary */
</style>
