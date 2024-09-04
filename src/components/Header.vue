<template>
  <header class="bg-[#F4A517] w-full h-20 flex items-center justify-between px-4 md:px-6 lg:px-8">
    <div class="flex items-center">
      <!-- Sidebar Toggle Button (for Mobile) -->
      <button @click.stop="toggleSidebar" class="md:hidden text-gray-800 focus:outline-none mr-4">
        <Icon :icon="isSidebarOpen ? 'heroicons-outline:x' : 'heroicons-outline:menu'" class="w-6 h-6" />
      </button>
      <div class="w-12 h-12 rounded-full flex items-center justify-center ml-2 md:ml-5">
        <RouterLink to="/">
          <img :src="logo" alt="Logo" class="cursor-pointer">
        </RouterLink>
      </div>
      <ul class="hidden md:flex gap-5 pl-5 items-center" style="font-family: 'Khmer OS Battambang', sans-serif;">
        <li>
          <RouterLink :to="`/`" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/' }">
            ទំព័រដើម
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/News" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/News' }">
            ព័ត៏មានថ្មីៗ
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/AplicationWorkView" class="text-white hover:text-gray-200" :class="{ 'underline': $route.path === '/AplicationWorkView' }">
            កម្មវិធីការងារ
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="flex gap-2 md:gap-4 items-center">
      <ul class="flex gap-2 md:gap-4 items-center">
        <!-- Notification Icon -->
        <li class="flex items-center gap-2">
          <Icon class="w-6 h-6 md:w-8 md:h-8" icon="mingcute:notification-fill" />
        </li>
        <!-- Settings Icon -->
        <li class="flex items-center gap-2">
          <Icon class="w-6 h-6 md:w-8 md:h-8" icon="uil:setting" />
        </li>
        <li v-if="isAuthenticated">
          <!-- Logout Button -->
          <button @click="logout" class="bg-red-500 text-white font-semibold py-1 px-2 md:py-2 md:px-4 rounded hover:bg-red-600">
            Logout
          </button>
        </li>
        <li v-else>
          <!-- Login Button -->
          <RouterLink to="/login" class="bg-gray-200 text-orange-500 hover:bg-gray-300 font-semibold py-1 px-2 md:py-2 md:px-4 rounded">
            Login
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import { Icon } from '@iconify/vue';

// Logo URL
const logo = ref('/images/logo/Output_v2.svg');

// Use the authentication composable
const { isAuthenticated, logout } = useAuth();

// Define sidebar state and toggle function
const isSidebarOpen = ref(false);

// Function to toggle the sidebar
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

