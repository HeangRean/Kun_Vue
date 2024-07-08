<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
<main class="p-4 md:p-8 lg:p-12 mb-12">
  <div class="flex flex-col items-center">
    <h1 class="text-center pt-8 pb-10">សេចក្តីប្រកាសព័ត៌មាន</h1>
    <img src="/public/images/content/mocspace_1719388983279 1.png" alt="Image" class="w-full max-w-[1280px] h-auto object-cover rounded-lg">
    <div class="flex items-center pt-5 pb-5 w-full max-w-[1280px]">
      <Icon class="date w-8 h-8" icon="fluent-mdl2:date-time"/>
      <span class="post ml-2 md:ml-4 lg:ml-6">ផុសថ្ងៃ: 12-01-2024</span>
    </div>
  </div>
  <p class="w-full max-w-[88rem] pl-12 md:pl-8 lg:pl-[12px] mb-20">
    ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ ទស្សនកិច្ចនេះ និសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មានដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ ទស្សនកិច្ចនេះ និសិ្សតបានចុះកិច្ចសិក្សា និងប្រមូលព័ត៍មានទស្សនកិច្ចនេះ និសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មានដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ...
  </p>
</main>
</template>

<style scoped>
h1 {
  font-family: 'Khmer OS Muol';
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem; /* Default for small screens */
}

p {
  font-family: 'Khmer OS Battambang';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem; /* Default for small screens */
  padding-left: 1px;
}

@media (min-width: 768px) { /* Medium screens (tablets) */
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) { /* Large screens (laptops/desktops) */ 
  h1 {
    font-size: 2.5rem;
    width: 1390px;
    padding-left: 4rem;
  }

  p {
    font-size: 1.5rem;
    width: 890px;
  }
}

@media (min-width: 1294px) { /* Specific width of 1294px */
  p {
    font-size: 1.5rem;
    width: 1200px;
    padding-left: 4rem;
  }
}

@media (min-width: 1380px) { /* Extra large screens */
  p {
    font-size: 1.5rem;
    width: 1320px;
    padding-left: 4rem;
  }
}
</style>
