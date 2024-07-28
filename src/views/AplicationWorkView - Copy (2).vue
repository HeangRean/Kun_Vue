<template>
  <div class="mb-12 md:mb-24 lg:mb-32">
    <h1 class="text-center pt-12 mb-5 text-4xl md:text-5xl lg:text-5xl">កម្មវិធីការងារ</h1>
    <h2 class="text-center text-lg md:text-xl mb-8">
      <DateTimeComponent />
    </h2>

    <div v-if="stateForm?.length > 0" v-for="(item, index) in stateForm" :key="index" class="main-box flex justify-center pt-10 mt-4 md:mt-0">
      <div class="box w-full md:w-4/2 lg:w-3/1 mb-[-30px]">
        <div class="w-full bg-[#9BC1FF] flex flex-col md:flex-row rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
          <!-- Left Section -->
          <div class="box1 w-full md:w-1/3 border-[#0094FF] border-b md:border-b-0 md:border-r p-2">
            <h3 class="text-lg md:text-xl flex gap-2 justify-center pt-10">
              <Icon :width="28" :height="28" icon="fluent-mdl2:date-time" />{{ item.time }} {{ item["meeting shift"] }}
            </h3>
          </div>
          <!-- Middle Section -->
          <div class="box1 w-full md:w-1/2 border-[#0094FF] border-b md:border-b-0 md:border-r p-2">
            <h3 class="text-base md:text-lg pt-5">{{ item.description }}</h3>
          </div>
          <!-- Right Section -->
          <div class="box1 w-full md:w-1/3 p-2 pt-7 rounded-br-lg">
            <h3 class="text-lg md:text-xl pl-4">{{ item.roome }}</h3>
            <!-- Bottom Section -->
            <div class="w-full h-30 bg-[#9BC1FF] flex flex-col md:flex-row justify-between items-center p-5 relative border border-[#0094FF] border-t-0 border-b-0 border-r-0 border-l-0">
              <h3 class="text-style text-base md:text-lg flex gap-2">
                <Icon :width="28" :height="28" icon="material-symbols:download" />ឯកសារ
              </h3>
              <div class="flex gap-8 mt-4 md:mt-0">
                <!-- Meeting Status -->
                <div class="flex items-center gap-4">
                  <h3 class="text-style text-base md:text-lg text-[#FF0000]">ពុំទាន់</h3>
                  <div v-if="item.status === 'pennding'" class="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
                    <Icon class="size-4" style="color: green" icon="icon-park-solid:correct"/>
                  </div>
                  <div v-else class="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
                    <Icon class="size-4" style="color: #008C0E" icon="icon-park-solid:red"/>
                  </div>
                </div>
                <!-- Meeting Status (Green) -->
                <div class="flex items-center gap-4">
                  <h3 class="text-style text-base md:text-lg text-[#008C0E]">រួចរាល់</h3>
                  <div v-if="item.status === 'done'" class="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
                    <Icon class="size-4" style="color: green" icon="icon-park-solid:correct"/>
                  </div>
                  <div v-else class="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
                    <Icon class="size-4" style="color: #008C0E" icon="icon-park-solid:red"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import db from "../../db.json";
import DateTimeComponent from '../components/DateTimeComponent.vue'; // Adjust the path as needed

const stateForm = ref(db || []);
console.log({ stateForm });
</script>

<style scoped>
/* Font Family */
h1 {
  font-family: 'Khmer OS Muol';
  font-style: normal;
  font-weight: 300;
}

h2 {
  font-family: 'Khmer OS Muol';
  font-style: normal;
  font-weight: 200;
}

h3 {
  font-family: 'Khmer OS Siemreap';
  font-style: normal;
  font-weight: normal;
}

.text-style {
  font-size: 16px;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .box1 {
    width: 100%;
    border-bottom: 1px solid #0094FF;
  }

  .box1 h3 {
    padding: 0.5rem;
  }

  .main-box {
    padding-top: 1rem;
  }

  .flex.flex-col.md\\:flex-row {
    flex-direction: column;
  }
}

@media (min-width: 1025px) {
  .flex.flex-col.md\\:flex-row {
    flex-direction: row;
  }
}

@media (max-width: 480px) {
  .box1 {
    display: block;
    padding: 1rem 0.5rem;
  }

  .main-box {
    flex-direction: column;
    padding-top: 1rem;
  }

  .box1 h3 {
    padding: 0.5rem 0;
    text-align: center;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  .text-base {
    font-size: 0.875rem;
  }
}

@media (max-width: 375px) {
  .box1 {
    display: block;
    padding: 1rem 0.5rem;
  }

  .main-box {
    flex-direction: column;
    padding-top: 1rem;
  }

  .box1 h3 {
    padding: 0.5rem 0;
    text-align: center;
  }

  .text-lg {
    font-size: 1rem;
  }

  .text-base {
    font-size: 0.75rem;
  }
}
</style>
 