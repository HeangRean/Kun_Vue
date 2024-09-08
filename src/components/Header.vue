<template>
  <div>
    <!-- Backdrop -->
    <div v-if="isSidebarOpen" class="fixed inset-0 bg-black/50 z-40" @click="closeSidebar"></div>

    <!-- Header -->
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

    <!-- Sidebar Menu (Left Slide-In) -->
    <aside
      class="md:hidden fixed inset-y-0 left-0 w-64 bg-[#F4A517] z-50 transform transition-transform duration-300 ease-in-out"
      :class="{ '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }" ref="sidebar">
      <div class="flex flex-col h-full">
        <div class="mt-20">
          <div class="w-full flex justify-center mb-10">
            <img src="/images/logo/logo.png" alt="Image" class="w-full max-w-[70px] h-auto object-cover rounded-full">
          </div>
          <!-- Navigation Links -->
          <ul>
            <li @click="navigateAndClose('/')">
              <RouterLink :to="`/`" class="text-white px-4 hover:text-gray-200" :class="{ 'underline': $route.path === '/' }">
                ទំព័រដើម
              </RouterLink>
            </li>
            <li class="pt-4" @click="navigateAndClose('/News')">
              <RouterLink to="/News" class="text-white px-4 hover:text-gray-200" :class="{ 'underline': $route.path === '/News' }">
                ព័ត៏មានថ្មីៗ
              </RouterLink>
            </li>
            <li class="pt-4" @click="navigateAndClose('/AplicationWorkView')">
              <RouterLink to="/AplicationWorkView" class="text-white px-4 hover:text-gray-200" :class="{ 'underline': $route.path === '/AplicationWorkView' }">
                កម្មវិធីការងារ
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { useAuth } from '../composables/useAuth';

const logo = ref('/images/logo/Output_v2.svg');
const isSidebarOpen = ref(false);

// Use the authentication composable
const { isAuthenticated, logout } = useAuth();

const router = useRouter();

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const navigateAndClose = (path) => {
  router.push(path);
  closeSidebar();
};

// Add event listener to detect clicks outside the sidebar
const handleClickOutside = (event) => {
  const sidebar = document.querySelector('[ref="sidebar"]');
  if (isSidebarOpen.value && sidebar && !sidebar.contains(event.target)) {
    closeSidebar();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  // Add resize event listener to handle backdrop removal
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  // Remove resize event listener
  window.removeEventListener('resize', handleResize);
});

// Handle resize to ensure sidebar is closed on large screens
const handleResize = () => {
  if (window.innerWidth >= 768 && isSidebarOpen.value) {
    closeSidebar();
  }
};
</script>

<style scoped>
/* Scoped styles can go here if necessary */
</style>
