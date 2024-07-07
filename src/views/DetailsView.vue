<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
};
</script>

<template>
  <div class="flex flex-col justify-center items-center mb-[22rem]">
    <div class="flex justify-center w-[100px] h-[800px] mt-8 mb-20">
      <div class="flex flex-col w-[700px] h-[800px] ">
        <div class="">
          <p class="pl-1 pt-8 pb-5">
            ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
            ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន
            ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ ទស្សនកិច្ចនេះ និសិ្សតបានចុះកិច្ចសិក្សា
            និងប្រមូលព័ត៍មាន...
          </p>
        </div>
        <div class="flex justify-start">
          <div class="Icon flex items-center  pb-1 gap-2">
            <Icon :width="32" :height="32" icon="fluent-mdl2:date-time" />
            <span>ផុសថ្ងៃ: 12-01-2024</span>
          </div>
        </div>
        <div>
          <div class="flex justify-center items-center my-6">
            <div class="h-px bg-slate-200 w-[117rem]"></div>
          </div>
          <img class="w-full h-[450px] object-fill" src="/public/images/content/Rectangle 43.png" alt="">
        </div>
      </div>
      <!-- sidebar-right -->
      <div class="flex w-[700px] h-[1000px]  ml-1 pt-4 pl-3 flex flex-col">
        <div class="w-[600px] h-[840px]  pl-20 pt-5 ">
          <span class="text-3xl font-khmer-battambang w-full">ព័ត៏មានថ្មីៗ</span>
          <div class="h-px bg-slate-200 w-full mt-2"></div>
          <!-- mainbox with router -->
          <div class="main_box w-ful h-34  mt-4">
            <div class="flex w-full h-ful mt-4 border-2 border-[#B1B1B1] border-t-0 border-l-0 border-r-0 pb-2">
              <div class="w-1/3 h-full">
                <router-link to="/DetailsView1">
                  <img src="/public/images/content/Rectangle 46.png" alt="Image Description" class="w-full h-[120px] object-cover">
                </router-link>
              </div>
              <div class="flex flex-col w-2/3 h-full">
                <div class="w-full h-[80px] p-2">
                  <span class="text-justify text-[17px] font-khmer-battambang">
                    ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
                    ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន...
                  </span>
                </div>
                <div class="flex justify-between items-center w-full h-[40px] p-2">
                  <span class="text-left text-xs flex-grow text-[#] " style="font-size: 17px;">27-04-2020
                    07:02:49</span>
                </div>
              </div>
            </div>
          </div>

          <!-- mainbox -->
          <div class="main_box w-full h-34  mt-4">
            <div class="flex w-full h-full mt-4 border-2 border-[#B1B1B1] border-t-0 border-l-0 border-r-0 pb-2">
              <div class="w-1/3 h-full">
                <img src="/public/images/content/Rectangle 43.png" alt="" class="w-full h-[120px] object-cover">
              </div>
              <div class="flex flex-col w-2/3 h-full">
                <div class="w-full h-[80px] p-2">
                  <span class="text-justify text-[17px] font-khmer-battambang">
                    ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
                    ទស្សនកិច្

សនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន...
                  </span>
                </div>
                <div class="flex justify-between items-center w-full h-[40px] p-2">
                  <span class="text-left text-xs flex-grow text-[#] " style="font-size: 17px;">27-04-2020
                    07:02:49</span>
                </div>
              </div>
            </div>
          </div>

          <!-- mainbox -->
          <div class="main_box w-ful h-34  mt-4">
            <div class="flex w-full h-ful mt-4 border-2 border-[#B1B1B1] border-t-0 border-l-0 border-r-0 pb-2">
              <div class="w-1/3 h-full">
                <img src="/public/images/content/Rectangle 5.png" alt="" class="w-full h-[120px] object-cover">
              </div>
              <div class="flex flex-col w-2/3 h-full">
                <div class="w-full h-[80px] p-2">
                  <span class="text-justify text-[17px] font-khmer-battambang">
                    ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
                    ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន...
                  </span>
                </div>
                <div class="flex justify-between items-center w-full h-[40px] p-2">
                  <span class="text-left text-xs flex-grow text-[#] " style="font-size: 17px;">27-04-2020
                    07:02:49</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <span class="text-3xl font-khmer-battambang w-full">ព័ត៏មានថ្មីៗ</span>
            <div class="h-px bg-slate-200 w-full mt-2"></div>
            <ul class="list-disc list-inside space-y-2 text-lg font-khmer-battambang pl-2 pt-5">
              <li><a href="" class="text-blue-500 hover:text-blue-700">សេចក្តីព្រមព្រៀង</a></li>
              <li><a href="" class="text-blue-500 hover:text-blue-700">ព័ត៌មានទូទៅ</a></li>
              <li><a href="" class="text-blue-500 hover:text-blue-700">សារលិខិត</a></li>
              <li><a href="" class="text-blue-500 hover:text-blue-700">សេចក្តីប្រកាសព័ត៌មាន</a></li>
              <li><a href="" class="text-blue-500 hover:text-blue-700">សេចក្តីជូនដំណឹង</a></li>
              <li><a href="" class="text-blue-500 hover:text-blue-700">កិច្ចប្រជុំ</a></li>
              <li><a href="" class="text-blue-500 hover:text-blue-700">សិក្ខាសាលា</a></li>
            </ul>
          </div>



        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
p {
  font-family: 'Khmer OS Battambang';
  font-style: normal;
  font-weight: normal;
  font-size: xx-large;
}
</style>
