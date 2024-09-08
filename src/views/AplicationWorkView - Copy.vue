<template>
  <div class="bigcontainer max-w-full relative">
    <div class="container max-w-full absolut flex flex-col justify-center items-center">
      <h1 class="title">កម្មវិធីការងារ</h1>
      <h2 class="subtitle">
        <DateTimeComponent />
      </h2>
      <div class="w-full">
        <div v-if="stateForm.length > 0" v-for="(item, index) in stateForm" :key="index" class="main-box w-full">
          <div class="box max-w-full mx-auto">
            <div class="content w-full">
              <!-- Left Section -->
              <div class="box1 left-section left-respon">
                <h3 class="heading respon-h">
                  <Icon class="icon-respon" :width="28" :height="28" icon="fluent-mdl2:date-time" />
                  <span style="font-size: 16px;">{{ item.start_datetime }} {{ item["meeting shift"] }}</span>
                </h3>
              </div>



              <!-- Middle Section -->
              <div class="box1 middle-section  border-b-0">
                <h3 class="description respon-dec ">
                  <div id="editor" v-html="item.description" content-type="html" toolbar="full"
                    class="ql-editor ql-editor-1" data-gramm="false" contenteditable="true">

                  </div>
                  <!-- {{ item.description }} -->
                </h3>
              </div>

              <div class="box1 right-section relative">
                <div class="child"></div>
                <h3 class="room txt-room pt-5">{{ item.venue }}</h3>

                <!-- Bottom Section -->
                <div class="flex main-respon flex-col">
                  <!-- Meeting Status and Meeting Status (Green) in a single row -->
                  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">

                    <div class="status-section pt-5" :class="{ 'cursor-pointer': item.related_document }"
                      @click="item.related_document ? downloadFile(item.related_document, item.filename) : null">
                      <h3 class="file font-txt text-h3 pt-5" :class="{
                        'text-blue-800': item.related_document && item.related_document !== '',
                        'text-black': !item.related_document || item.related_document === ''
                      }">
                        <Icon class="respon-file respon-text" :width="20" :height="20"
                          icon="material-symbols:download" />
                        ឯកសារ
                      </h3>
                    </div>
                    <!-- Add a wrapper for the status sections -->
                    <div class="status-wrapper flex flex-col lg:flex-row lg:justify-between lg:items-center">
                      <!-- Meeting Status (Pending) -->
                      <div class="flex items-center gap-4 pl-4 pt-5">
                        <h3 class="status-text respon-text text-base md:text-lg text-[#FF0000]">ពុំទាន់</h3>
                        <div class="border-2 border-black rounded-full w-4 h-4 flex justify-center items-center">
                          <Icon class="size-4 all-correct" :style="{
                            color: item.is_public === '0' && item.is_cancelled === '1' ? '#FF0000' : '#D3D3D3'
                          }" :icon="item.is_public === '0' && item.is_cancelled === '1' ? 'icon-park-solid:correct' : 'icon-park-solid:minus'" />
                        </div>
                      </div>

                      <!-- Meeting Status (Done) -->
                      <div class="flex items-center gap-4 pl-4 pt-5">
                        <h3 class="status-text respon-text text-base md:text-lg text-[#008C0E]">រួចរាល់</h3>
                        <div class="border-2 border-black rounded-full w-4 h-4 flex justify-center items-center">
                          <Icon class="size-4 all-correct" :style="{
                            color: item.is_public === '1' && item.is_cancelled === '0' ? '#008C0E' : '#D3D3D3'
                          }" :icon="item.is_public === '1' && item.is_cancelled === '0' ? 'icon-park-solid:correct' : 'icon-park-solid:minus'" />
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
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import DateTimeComponent from '../components/DateTimeComponent.vue'; // Adjust the path as needed
import axios from 'axios';




const stateForm = ref([]);
const fetchData = async () => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No token found. Please log in.');
    }

    const response = await axios.get('https://api.pis3th.info/api/meetings', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    console.log('API Response:', response); // Log the entire response object

    // Access the nested data correctly
    if (response.data && response.data.data && Array.isArray(response.data.data)) {
      stateForm.value = response.data.data;
    } else {
      console.warn('Unexpected data format:', response.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error.response || error.message); // Improved error logging
    alert('Error fetching data. Please log in again.');
  }
};






onMounted(() => {
  fetchData(); // Fetch data when component is mounted
});

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
/* General Container */
.container {
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
}

.bigcontainer {
  max-width: 100%;
  position: relative;
}

/* Font Family */
.title,
.subtitle,
.heading,
.description,
.room,
.file,
.status-text {
  font-family: 'Khmer OS Siemreap', sans-serif;
  font-style: normal;
  font-weight: normal;
}

.title {
  font-family: 'Khmer OS Muol', sans-serif;
  font-weight: 300;
  text-align: center;
  padding-top: 3rem;
  margin-bottom: 1.25rem;
  font-size: 2.25rem;
}

.subtitle {
  font-weight: 200;
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.heading,
.description,
.room,
.file {
  font-family: 'Khmer OS Siemreap', sans-serif;
}

.heading {
  font-size: 1.20rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding-top: 2.5rem;
}

.description {
  font-size: 1.20rem;
  padding-top: 1.25rem;
}

.room {
  font-size: 1.125rem;
  padding-left: 1rem;
}

.file {
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
}

.text-h3 {
  font-size: 15px;
}

/* Status Items */
.status-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.status-text {
  font-size: 14px;
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

/* Box and Sections */
.main-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  box-sizing: border-box;
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
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
}

.left-section,
.middle-section,
.right-section {
  border-bottom: 1.20px solid #0094FF;
  padding: 1px;
}

.left-section {
  border-right: 1px solid #0094FF;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 0px solid;
}

.middle-section {
  border-right: 1px solid #0094FF;
  flex: 3;
  padding: 10px;
  border-bottom: 0px solid;
}

.right-section {
  border-bottom: none;
  border-right: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.status-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 375px) {
  .content {
    flex-direction: row;
  }


  .left-section,
  .middle-section,
  .right-section {
    padding: 0.5rem;
    text-align: center;
  }

  .left-section .heading,
  .middle-section .description,
  .right-section .room,
  .right-section .status-text,
  .right-section .file {
    font-size: 12px;
    line-height: 1.2;
  }

  .status-wrapper {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }

  .status-text {
    font-size: 10px;
  }

  .icon {
    font-size: 20px;
  }
}

@media (min-width: 375px) and (max-width: 541px) {
  .content {
    flex-direction: row;
  }

  .left-section .heading {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .middle-section{
    border-bottom: 1px solid #0094FF;
    border-right: none;
  }
  .left-section{
    border-bottom: 1px solid #0094FF;
  }
 
  .left-section,
  .middle-section,
  .right-section {
    padding: 0.8rem;
    text-align: center;
  }

  .left-section .heading,
  .middle-section .description,
  .right-section .room,
  .right-section .status-text,
  .right-section .file {
    font-size: 14px; /* Slightly larger for readability */
  }



  .status-text {
    font-size: 12px;
  }

  .icon {
    font-size: 24px;
  }

  .description {
    -webkit-line-clamp: 4; /* Show more lines on medium small screens */
    line-height: 1.4;
  }

  .room {
    font-size: 16px;
    padding-left: 0.5rem;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  .left-section,
  .middle-section,
  .right-section {
    text-align: center;
  }

  .left-section .heading {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .right-section {
    padding: 0.75rem;
    text-align: center;
  }

  .right-section .room {
    font-size: 18px;
  }

  .right-section .status-text,
  .right-section .file {
    font-size: 12px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .content {
    flex-direction: row;
    padding: 5px;
  }

  .left-section,
  .middle-section,
  .right-section {
    padding-left: 12px;
    text-align: center;
  }

  .right-section {
    flex: 1.7;
  }

  .status-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (min-width: 1024px) and (max-width: 1089px) {
  .right-section {
    flex: 2;
  }
}

@media (min-width: 1024px) and (max-width: 1440px) {
  .left-section,
  .middle-section,
  .right-section {
    padding-left: 12px;
    text-align: center;
  }

  .content {
    flex-direction: row;
    padding: 5px;
  }

  .right-section {
    flex: 1.7;
  }
}

@media (min-width: 1200px) {
  .content {
    flex-direction: row;
  }
}
</style>
