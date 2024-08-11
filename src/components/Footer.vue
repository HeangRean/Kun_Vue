<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer class="bg-white py-10 border border-r-0 border-l-0 border-b-0">
    <div class="px-4 md:px-8 lg:px-12">
      <ul class="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
        <div class="flex gap-5 justify-center">
          <ul class="flex gap-4">
            <li class="flex items-center gap-2">
              <Icon class="w-6 h-6 md:w-8 md:h-8" icon="logos:facebook" />
            </li>
            <li class="flex items-center gap-2">
              <Icon class="w-6 h-6 md:w-8 md:h-8" icon="logos:telegram" />
            </li>
            <li class="flex items-center gap-2">
              <Icon class="w-6 h-6 md:w-8 md:h-8" icon="skill-icons:instagram" />
            </li>
            <li class="flex items-center gap-2">
              <Icon class="w-6 h-6 md:w-8 md:h-8" icon="logos:twitter" />
            </li>
            <li class="flex items-center gap-2">
              <Icon class="w-6 h-6 md:w-8 md:h-8" icon="logos:youtube-icon" />
            </li>
            <li class="flex items-center gap-2">
              <Icon class="w-6 h-6 md:w-8 md:h-8" icon="twemoji:flag-cambodia" />
            </li>
          </ul>
        </div>

        <div class="flex flex-col md:flex-row gap-5 text-center">
          <li class="flex items-center gap-2">
            <a href="" class="text-sm md:text-base lg:text-lg">ជជែកផ្ទាល់</a>
          </li>
          <li class="flex items-center gap-2">
            <a href="" class="text-sm md:text-base lg:text-lg">ទំនាក់ទំនង</a>
          </li>
          <li class="flex items-center gap-2">
            <a href="" class="text-sm md:text-base lg:text-lg">ផ្តល់មតិយោបល់</a>
          </li>
          <li class="flex items-center gap-2">
            <a href="" class="text-sm md:text-base lg:text-lg">សំនួរ និងចម្លើយ</a>
          </li>
        </div>
      </ul>

      <div class="flex justify-center items-center my-6">
        <div class="h-px bg-slate-200 w-full max-w-7xl"></div>
      </div>

      <div class="flex justify-center">
        <ul class="flex items-center gap-5">
          <li>
            <a href="#" class="text-xs md:text-sm lg:text-base text-center">
              រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ៖រដ្ឋបាលខេត្តមានជ័យ
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Add any additional styles if necessary */

</style>
