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
    <div class="flex flex-col lg:flex-row justify-center w-full mt-8 mb-20 px-4 lg:px-0">
      <div class="flex flex-col w-full lg:w-[600px] h-auto lg:h-[800px] p-4">
        <div class="">
          <p class="pl-1 pt-8 pb-5 text-base md:text-lg lg:text-xl xl:text-2xl">
            ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
            ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន
            ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ ទស្សនកិច្ចនេះ និសិ្សតបានចុះកិច្ចសិក្សា
            និងប្រមូលព័ត៍មាន...
          </p>
        </div>
        <div class="flex justify-start">
          <div class="Icon flex items-center pb-1 gap-2">
            <Icon :width="32" :height="32" icon="fluent-mdl2:date-time" />
            <span class="text-sm md:text-base lg:text-lg xl:text-xl">ផុសថ្ងៃ: 12-01-2024</span>
          </div>
        </div>
        <div>
          <div class="flex justify-center items-center my-6">
            <div class="h-px bg-slate-200 w-full lg:w-[117rem]"></div>
          </div>
          <img class="w-full h-auto lg:h-[450px] object-cover" src="/public/images/content/Rectangle 46.png" alt="">
        </div>
      </div>
      <!-- sidebar-right -->
      <div class="flex flex-col w-full lg:w-[700px] h-auto lg:h-[1000px] ml-0 lg:ml-1 pt-4 pl-3 lg:pl-0">
        <div class="w-full lg:pl-12 pt-5">
          <span class="text-xl md:text-2xl lg:text-3xl font-khmer-battambang w-full">ព័ត៏មានថ្មីៗ</span>
          <div class="h-px bg-slate-200 w-full mt-2"></div>
          <!-- mainbox with router -->
          <div class="main_box w-full h-auto mt-4">
            <div class="flex w-full h-auto mt-4 border-2 border-[#B1B1B1] border-t-0 border-l-0 border-r-0">
              <div class="w-1/3 h-auto">
                <router-link to="/Details">
                  <img src="/public/images/content/Rectangle 43.png" alt="Image Description" class="w-full h-[120px] object-cover">
                </router-link>
              </div>
              <div class="flex flex-col w-2/3 h-auto">
                <div class="w-full h-auto pl-2">
                  <span class="text-sm md:text-base lg:text-lg xl:text-xl font-khmer-battambang overflow-hidden text-overflow-ellipsis line-clamp-2 md:line-clamp-3">
                    ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
                    ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន...
                  </span>
                </div>
                <div class="flex justify-between items-center w-full h-auto pl-2">
                  <span class="text-left text-xs md:text-sm lg:text-base xl:text-lg">27-04-2020 07:02:49</span>
                </div>
              </div>
            </div>
          </div>

          <!-- mainbox -->
          <div class="main_box w-full h-auto mt-4">
            <div class="flex w-full h-auto mt-4 border-2 border-[#B1B1B1] border-t-0 border-l-0 border-r-0">
              <div class="w-1/3 h-auto">
                <img src="/public/images/content/Rectanglel.png" alt="" class="w-full h-[120px] object-cover">
              </div>
              <div class="flex flex-col w-2/3 h-auto">
                <div class="w-full h-auto pl-2">
                  <span class="text-sm md:text-base lg:text-lg xl:text-xl font-khmer-battambang overflow-hidden text-overflow-ellipsis line-clamp-2 md:line-clamp-3">
                    ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
                    ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន...
                  </span>
                </div>
                <div class="flex justify-between items-center w-full h-auto pl-2">
                  <span class="text-left text-xs md:text-sm lg:text-base xl:text-lg">27-04-2020 07:02:49</span>
                </div>
              </div>
            </div>
          </div>

          <!-- mainbox -->
          <div class="main_box w-full h-auto mt-4">
            <div class="flex w-full h-auto mt-4 border-2 border-[#B1B1B1] border-t-0 border-l-0 border-r-0">
              <div class="w-1/3 h-auto">
                <img src="/public/images/content/Rectangle 5.png" alt="" class="w-full h-[120px] object-cover">
              </div>
              <div class="flex flex-col w-2/3 h-auto">
                <div class="w-full h-auto pl-2">
                  <span class="text-sm md:text-base lg:text-lg xl:text-xl font-khmer-battambang overflow-hidden text-overflow-ellipsis line-clamp-2 md:line-clamp-3">
                    ដំណើរទស្សនកិច្ចសិក្សាទៅកាន់ខេត្តមណ្ឌលគិរី ក្នុងដំណើរការ
                    ទស្សនកិច្ចនេះនិសិ្សតបានចុះកិច្ចសិក្សានិងប្រមូលព័ត៍មាន...
                  </span>
                </div>
                <div class="flex justify-between items-center w-full h-auto pl-2">
                  <span class="text-left text-xs md:text-sm lg:text-base xl:text-lg">27-04-2020 07:02:49</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12">
            <span class="text-xl md:text-2xl lg:text-3xl font-khmer-battambang w-full">ព័ត៏មានថ្មីៗ</span>
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
}

@media (min-width: 1692px) { 
  p {
    font-size: 1.5rem;
    /* width: 1390px; */
    /* padding-left: 4rem; */
    /* margin-left: 6rem; */
  }
}
</style>
