<template>
  <div class="bigcontainer max-w-full relative h-[1700px]  ">
    <div class="container max-w-full absolut flex flex-col justify-center items-center">
      <h1 class="title">កម្មវិធីការងារ</h1>
      <h2 class="subtitle">
        <DateTimeComponent />
      </h2>
      <div class="w-full ">
        <div v-if="stateForm?.length > 0" v-for="(item, index) in stateForm" :key="index" class="main-box w-full">
          <div class="box max-w-full mx-auto ">
            <div class="content w-full ">
              <!-- Left Section -->
              <div class="box1 left-section left-respon">
                <h3 class="heading respon-h">
                  <Icon class="icon-respon" :width="28" :="28" icon="fluent-mdl2:date-time"/>
                  {{item.start_datetime }} {{ item["meeting shift"] }}
                </h3>
              </div>

              <!-- Middle Section -->
              <div class="box1 middle-section middle-respon">
                <h3 class="description respon-dec ">
                  <b>
                    {{ item.nickname }}
                  </b>
                    {{ item.between }}

                    <b>
                      {{ item.nickname1 }}
                    </b>
                    {{ item.description }}
                </h3>

              </div>

              <div class="box1 right-section relative">
                <div class="child"></div>
                <h3 class=" room txt-room pt-5">{{ item.venue }}</h3>

                <!-- Bottom Section -->
                <div class="flex main-respon flex-col"> <!-- Stack vertically on small screens -->


                  <!-- Meeting Status and Meeting Status (Green) in a single row -->
                  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div class="status-section pt-5" @click="downloadFile(item.fileUrl, item.fileName)">
                      <h3 class="file font-txt text-h3 pt-5">
                        <Icon class="respon-file respon-text " :width="20" :height="20" icon="material-symbols:download" />ឯកសារ
                      </h3>
                    </div>
                                    <!-- Add a wrapper for the status sections -->
                      <div class="status-wrapper flex flex-col lg:flex-row lg:justify-between lg:items-center">
                        <!-- Meeting Status -->
                        <div class="flex items-center gap-4 pl-4 pt-5">
                          <h3 class="status-text respon-text text-base md:text-lg text-[#FF0000]">ពុំទាន់</h3>
                          <div v-if="item.status === 'pending'"
                            class="border-2 border-black rounded-full w-4 h-4 flex justify-center items-center">
                            <Icon class="size-4 all-correct" style="color: green" icon="icon-park-solid:correct" />
                          </div>
                          <div v-else
                            class="border-2 border-black rounded-full w-4 h-4 flex justify-center items-center circle">
                            <Icon class="size-4 all-correct" style="color: #008C0E" icon="icon-park-solid:red" />
                          </div>
                        </div>

                        <!-- Meeting Status (Green) -->
                        <div class="flex items-center gap-4 pl-4 pt-5">
                          <h3 class="status-text respon-text text-base md:text-lg text-[#008C0E]">រួចរាល់</h3>
                          <div v-if="item.status === 'done'"
                            class="border-2 border-black rounded-full w-4 h-4 flex justify-center items-center circle">
                            <Icon class="size-4 all-correct" style="color: green" icon="icon-park-solid:correct" />
                          </div>
                          <div v-else
                            class="border-2 border-black rounded-full w-4 h-4 flex justify-center items-center circle">
                            <Icon class="size-4 all-correct" style="color: #008C0E" icon="icon-park-solid:red" />
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

.text-h3 {
  font-size: 15px;
  color: red;
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
  font-size: 15px;
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
  box-sizing: border-box;
  /* Ensure padding and border are included in the element's total width and height */
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
  padding: 1px;
  border-bottom: 0px;
}

.left-section {
  border-right: 1px solid #0094FF;
  flex: 1;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding-bottom: 40px;
}


.middle-section {
  border-right: 1px solid #0094FF;
  flex: 3;
  padding: 10px;

}

.right-section {
  border-bottom: none;
  border-right: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  text-align: center; /* Center text within each child element */
}


.status-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  cursor: pointer;
  /* Make sure the section is clickable */
}


/* Mobile devices (375px and smaller) */

/* Mobile devices (375px and smaller) */
/* Mobile devices (375px and smaller) */
@media (max-width: 375px) {
.content {
  flex-direction: column;
}

.left-section, .middle-section, .right-section {
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

@media (min-width: 375px) and (max-width: 576px) {
  .content {
    flex-direction: row;
  }

  .left-section, .middle-section, .right-section {
    padding: 0.8rem;
    text-align: center;

  }


  .left-section .heading {
  display: flex;
  align-items: center; /* Center icon and text vertically */
  flex-wrap: wrap; /* Allow text to wrap if it's too long */
}

.icon-respon {
  width: 28px;
  height: 28px;
  margin-right: 0.5rem; /* Space between icon and text */
}

.heading span {
  word-break: break-word; /* Break long words */
}


  .status-wrapper {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
  .room.txt-room.pt-5 {
    
    font-size: 18px; /* Adjust for smaller screens */
    margin-top: 0.8rem; /* Adjust top margin for smaller screens */
  }

}


/* Small devices (576px and smaller) */
@media (min-width: 576px) and (max-width: 768px) {
  .left-section, .middle-section, .right-section {
  
    text-align: center;

  }
  .left-section .heading {
  display: flex;
  align-items: center; /* Center icon and text vertically */
  flex-wrap: wrap; /* Allow text to wrap if it's too long */
}

  .right-section {
    padding: 0.75rem;
    text-align: center;
    word-wrap: break-word;
  }

  .right-section .room {
    font-size: 18px;
    text-align: center;
    /* Center the text in the room class */
  }

  .right-section .status-text {
    font-size: 12px;
    /* Adjust font size for status text */
    text-align: center;
    /* Center the status text */
  }

  .right-section .file {
    font-size: 12px;
    /* Adjust font size for file text */
    text-align: center;
    /* Center the file text */
  }
}




/* Tablets (768px to  1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .content {
    flex-direction: row;
    padding: 5px;
  }
  .left-section, .middle-section, .right-section {
  padding-left: 12px;
  text-align: center;

}
  .left-section .heading {
  display: flex;
  align-items: center; /* Center icon and text vertically */
  flex-wrap: wrap; /* Allow text to wrap if it's too long */
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
@media (min-width: 1024px) and (max-width: 1440px) {
  .left-section, .middle-section, .right-section {
  padding-left: 12px;
  text-align: center;

}
  .left-section .heading {
  display: flex;
  align-items: center; /* Center icon and text vertically */
  flex-wrap: wrap; /* Allow text to wrap if it's too long */
}
    .content {
    flex-direction: row;
    padding: 5px;
  }
  .right-section {
   flex: 1.7;
}
}


/* Extra large devices (1200px and up) */
@media (min-width: 1200px) {
  .content {
    flex-direction: row;
    
  }
}
</style>
