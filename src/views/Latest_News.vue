<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <h1 class="text-center pt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">ព័ត៏មានថ្មីៗ</h1>
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col md:flex-row w-5/6 h-auto mt-8 border-2 border-gray-300">
      <div class="w-full md:w-1/3 h-48 md:h-auto">
        <img src="/public/images/content/Rectangle 43.png" alt="" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col w-full md:w-2/3 h-auto">
        <div class="w-full p-4 md:p-8">
          <p class="text-sm sm:text-base md:text-lg lg:text-xl">
            ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មានដំណើរ
            ក្នុងដំណើរការ ទស្សនកិច្ចនេះ និសិ្សតបានចុះកិច្ចសិក្សា និងប្រមូលព័ត៍មាន...
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center w-full p-4 mt-12 md:p-8">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg flex-grow">(ភ្នំពេញ)៖ នាព្រឹកថ្ងៃអង្គារ ទី២ ខែកក្តដា ឆ្នាំ២០២៤</p>
          <button class="w-full md:w-32 h-12 rounded-lg text-white bg-[#589BB0] mt-4 md:mt-0">
            <RouterLink to="/Details">អានបន្ថែម</RouterLink> 
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Repeat similar structure for other news items -->

  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col md:flex-row w-5/6 h-auto mt-8 border-2 border-gray-300">
      <div class="w-full md:w-1/3 h-48 md:h-auto">
        <img src="/public/images/content/Rectangle 44.png" alt="" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col w-full md:w-2/3 h-auto">
        <div class="w-full p-4 md:p-8">
          <p class="text-sm sm:text-base md:text-lg lg:text-xl">
            ការកំណត់សមាសភាពក្រុមប្រឹកក្សាភិបាលសិក្សាទីផ្សារ និងផ្សាយទេសចរណ៍កម្ពុជា (ភ្នំពេញ)៖ រាជរដ្ឋាភិបាលបានចេញសេចក្ដីសម្រេច...
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center w-full p-4 mt-12 md:p-8">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg flex-grow">(ភ្នំពេញ)៖ នាព្រឹកថ្ងៃអង្គារ ទី២ ខែកក្តដា ឆ្នាំ២០២៤</p>
          <button class="w-full md:w-32 h-12 rounded-lg text-white bg-[#589BB0] mt-4 md:mt-0">អានបន្ថែម</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Repeat similar structure for other news items -->

  <div class="flex flex-col justify-center items-center mb-24">
    <div class="flex flex-col md:flex-row w-5/6 h-auto mt-8 border-2 border-gray-300">
      <div class="w-full md:w-1/3 h-48 md:h-auto">
        <img src="/public/images/content/Rectangle 46.png" alt="" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col w-full md:w-2/3 h-auto">
        <div class="w-full p-4 md:p-8">
          <p class="text-sm sm:text-base md:text-lg lg:text-xl">
            រដ្ឋមន្រ្ដីក្រសួងអប់រំ កោតសរសើរ និងវាយតម្លៃខ្ពស់លើកម្មវិញសិក្សា ដ៏សម្បូរបែប របស់សាលាអន្ដរជាតិ​ ស៊ី អាយ អេ ហ្វឺសត៍ ជាពិសេសកម្ម...
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center w-full p-4 mt-12 md:p-8">
          <p class="text-xs sm:text-sm md:text-base lg:text-lg flex-grow">(ភ្នំពេញ)៖ នាព្រឹកថ្ងៃអង្គារ ទី២ ខែកក្តដា ឆ្នាំ២០២៤</p>
          <button class="w-full md:w-32 h-12 rounded-lg text-white bg-[#589BB0] mt-4 md:mt-0">អានបន្ថែម</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Khmer OS Muol';
  font-weight: 300;
}
p {
  font-family: 'Khmer OS Battambang';
  font-weight: normal;
}
button {
  font-family: 'Khmer OS Battambang';
  background-color: rgb(98, 149, 162);
}
</style>
