<template>
  <div class="bigcontainer max-w-full relative h-[1500px] bg-red-500 "> 
  <div class="container max-w-full absolut flex flex-col justify-center items-center">
    <h1 class="title">កម្មវិធីការងារ</h1>
    <h2 class="subtitle">
      <DateTimeComponent />
    </h2>
    <div class="w-full bg-blue-500">
      <div v-if="stateForm?.length > 0" v-for="(item, index) in stateForm" :key="index" class="main-box w-full bg-green-50">
        <div class="box max-w-full mx-auto">
          <div class="content w-full">
            <!-- Left Section -->
            <div class="box1 left-section">
              <h3 class="heading">
                <Icon :width="28" :height="28" icon="fluent-mdl2:date-time" />{{ item.time }} {{ item["meeting shift"] }}
              </h3>
            </div>

            <!-- Middle Section -->
            <div class="box1 middle-section">
              <h3 class="description">{{ item.description }}</h3>
            </div>

            <!-- Right Section -->
            <div class="box1 right-section">
              <h3 class="room">{{ item.roome }}</h3>

              <!-- Bottom Section -->
              <div class="status-section" @click="downloadFile(item.fileUrl, item.fileName)">
                <h3 class="file">
                  <Icon :width="28" :height="28" icon="material-symbols:download" />ឯកសារ
                </h3>

                <!-- Meeting Status -->
                <div class="flex items-center gap-4">
                  <h3 class="text-base md:text-lg text-[#FF0000]">ពុំទាន់បានប្រជុំ</h3>
                  <div v-if="item.status === 'pending'" class="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
                    <Icon class="size-4" style="color: green" icon="icon-park-solid:correct"/>
                  </div>
                  <div v-else class="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
                    <Icon class="size-4" style="color: #008C0E" icon="icon-park-solid:red"/>
                  </div>
                </div>
                <!-- Meeting Status (Green) -->
                <div class="flex items-center gap-4">
                  <h3 class="text-base md:text-lg text-[#008C0E]">បានប្រជុំរួចរាល់</h3>
                  <div v-if="item.status === 'done'" class="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
                    <Icon class="size-4" style="color:green" icon="icon-park-solid:correct"/>
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
</div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import db from "../../db.json";
import DateTimeComponent from '../components/DateTimeComponent.vue'; // Adjust the path as needed

const stateForm = ref(db || []);
console.log({ stateForm });

const toggleStatus = (index) => {
  stateForm.value[index].status = stateForm.value[index].status === 'pending' ? 'done' : 'pending';
};

const downloadFile = (url, fileName) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
};
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
}

/* Font Family */
.title {
  font-family: 'Khmer OS Muol';
  font-style: normal;
  font-weight: 300;
  text-align: center;
  padding-top: 3rem;
  margin-bottom: 1.25rem;
  font-size: 2.25rem;
}

.subtitle {
  font-family: 'Khmer OS Muol';
  font-style: normal;
  font-weight: 200;
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.heading {
  font-family: 'Khmer OS Siemreap';
  font-style: normal;
  font-weight: normal;
  font-size: 1.20rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding-top: 2.5rem;
}

.description {
  font-family: 'Khmer OS Siemreap';
  font-style: normal;
  font-weight: normal;
  font-size: 1.20rem;
  padding-top: 1.25rem;
}

.room {
  font-family: 'Khmer OS Siemreap';
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  padding-left: 1rem;
}

.file {
  font-family: 'Khmer OS Siemreap';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
  color: black;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.status-text {
  font-family: 'Khmer OS Siemreap';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
}

.status-text.pending {
  color: red;
}

.status-text.done {
  color: green;
}

.status-icon {
  border: 2px solid black;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 1.25rem;
}

.pending {
  color: #FF0000;
}

.done {
  color: #008C0E;
}

.container {
  width: 100%;
  margin-bottom: 4rem;
}

.main-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
}

.box {
  width: 100%;
  background-color: #9BC1FF;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.content {
  display: flex;
  flex-direction: row;
}

.left-section,
.middle-section,
.right-section {
  border-bottom: 1.20px solid #0094FF;
  padding: 0.5rem;
}

.left-section {
  border-right: 1px solid #0094FF;
  flex: 1;
}

.middle-section {
  border-right: 1px solid #0094FF;
  flex: 2;
}

.right-section {
  border-bottom: none;
  border-right: none;
  flex: 1;
}

.status-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border-top: 1px solid #0094FF;
  cursor: pointer; /* Make sure the section is clickable */
}

/* Responsive Styles */
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .title {
    font-size: 1.875rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .heading {
    font-size: 1rem;
  }

  .description {
    font-size: 0.875rem;
  }

  .room {
    font-size: 1rem;
  }

  .file {
    font-size: 0.875rem;
  }

  .status-text {
    font-size: 0.875rem;
  }

  .status-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .content {
      flex-direction: row;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .content {
    flex-direction: row;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .content {
    flex-direction: row;
  }
}
</style>
