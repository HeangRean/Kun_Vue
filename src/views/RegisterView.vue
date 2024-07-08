<template>
  <div class="max-w-sm mx-auto mt-10 bg-[#EBEBEB] shadow-md rounded-lg p-4 mb-20">
    <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
    <form @submit.prevent="handleRegister">
      <!-- Full Name Input -->
      <div class="mb-3">
        <label for="fullName" class="block text-gray-700">Full Name</label>
        <input v-model.trim="fullName" id="fullName" type="text" class="input-field" :class="{ 'border-red-500': errors.fullName }" />
        <p v-if="errors.fullName" class="text-red-500 text-xs">{{ errors.fullName }}</p>
      </div>

      <!-- E-mail Input -->
      <div class="mb-3">
        <label for="email" class="block text-gray-700">E-mail</label>
        <input v-model.trim="email" id="email" type="email" class="input-field" :class="{ 'border-red-500': errors.email }" />
        <p v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</p>
      </div>

      <!-- Phone Input -->
      <div class="mb-3">
        <label for="phone" class="block text-gray-700">Phone</label>
        <input v-model.trim="phone" id="phone" type="tel" class="input-field" :class="{ 'border-red-500': errors.phone }" />
        <p v-if="errors.phone" class="text-red-500 text-xs">{{ errors.phone }}</p>
      </div>

      <!-- Password Input -->
      <div class="mb-3">
        <label for="password" class="block text-gray-700">Password</label>
        <input v-model="password" id="password" type="password" class="input-field" :class="{ 'border-red-500': errors.password }" />
        <p v-if="errors.password" class="text-red-500 text-xs">{{ errors.password }}</p>
      </div>

      <!-- Confirm Password Input -->
      <div class="mb-3">
        <label for="confirmPassword" class="block text-gray-700">Confirm Password</label>
        <input v-model="confirmPassword" id="confirmPassword" type="password" class="input-field" :class="{ 'border-red-500': errors.confirmPassword }" />
        <p v-if="errors.confirmPassword" class="text-red-500 text-xs">{{ errors.confirmPassword }}</p>
      </div>

      <!-- Register Button -->
      <div class="flex justify-center mb-6">
        <button type="submit" class="w-full bg-[#F4A517] text-white font-semibold py-2 px-3 rounded-sm hover:bg-[#e4ac42]">Register</button>
      </div>
      <p class="text-center text-xs text-gray-600 mt-6 mb-2">Already have an account? <RouterLink to="/Login" class="text-indigo-600 hover:underline">Login</RouterLink></p>  
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const fullName = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');

const errors = ref({
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
});

const validateForm = () => {
  errors.value.fullName = !fullName.value ? 'Full Name is required' : '';
  errors.value.email = !email.value ? 'E-mail is required' : '';
  errors.value.phone = !phone.value ? 'Phone is required' : '';
  errors.value.password = !password.value ? 'Password is required' : '';
  errors.value.confirmPassword = password.value !== confirmPassword.value ? 'Passwords do not match' : '';

  return !Object.values(errors.value).some(error => error !== '');
};

const handleRegister = () => {
  if (validateForm()) {
    const userProfile = { name: fullName.value, email: email.value, phone: phone.value };
    store.dispatch('register', userProfile); // Replace with actual action name in your Vuex store
    router.push('/'); // Redirect to home page or dashboard after successful registration
  }
};
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  height: 2.5rem; /* Adjust as needed for smaller or larger heights */
}

.input-field:focus {
  outline: none;
  border-color: #4a90e2; /* Example of focus border color */
}
</style>
