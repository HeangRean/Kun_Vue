import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// Global authentication state
const isAuthenticated = ref(false);
const loading = ref(false);

export function useAuth() {
  const router = useRouter();

  // Initialize authentication state
  const initializeAuth = () => {
    const token = sessionStorage.getItem('authToken'); // Use session storage
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      isAuthenticated.value = true;
    } else {
      // Optionally redirect to login if no token found
      // router.push('/login');
    }
  };

  // Login function
  const login = async (formLogin) => {
    try {
      loading.value = true; // Set loading to true while making the request
      console.log('Form login data:', formLogin); // Log the data being sent
      
      const response = await axios.post('https://api.pis3th.info/api/login', formLogin, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      if (response.status === 200) {
        const { access_token } = response.data;

        // Save the token and update the authentication state
        sessionStorage.setItem('authToken', access_token); // Use session storage
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        isAuthenticated.value = true; // Update state to reflect logged-in status

        // Redirect to the dashboard or a specific page
        router.push('/AplicationWorkView');
      }
    } catch (error) {
      console.error('Login error:', error);

      if (error.response) {
        console.error('API Error Response:', error.response.data);

        if (error.response.status === 422) {
          // Extract and display validation errors
          const errors = error.response.data.error || {};
          const messages = Object.entries(errors)
            .map(([field, errorMessages]) => {
              if (Array.isArray(errorMessages)) {
                return `${field}: ${errorMessages.join(', ')}`;
              } else {
                return `${field}: ${errorMessages}`;
              }
            })
            .join('\n');
          alert(`Validation Error:\n${messages}`);
        } else {
          alert(`Error ${error.response.status}: ${error.response.data.message || 'An unexpected error occurred.'}`);
        }
      } else {
        alert('An unexpected error occurred. Please try again.');
      }
    } finally {
      loading.value = false; // Set loading to false after the request completes
    }
  };

  // Logout function
  const logout = () => {
    sessionStorage.removeItem('authToken'); // Use session storage
    delete axios.defaults.headers.common['Authorization'];
    isAuthenticated.value = false; // Update state to reflect logged-out status
    
    // Redirect to login page after logout
    router.push('/login');
  };

  // Initialize authentication state on composable usage
  initializeAuth();

  return {
    isAuthenticated,
    login,
    logout,
    loading // Expose loading state
  };
}
