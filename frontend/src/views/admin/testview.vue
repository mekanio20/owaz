<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h2 class="mb-6 text-2xl font-bold text-center">Upload Multiple Images</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700">Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              @change="handleFileUpload"
              class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
          <div v-if="previewImages.length" class="grid grid-cols-2 gap-4">
            <div v-for="(image, index) in previewImages" :key="index" class="relative">
              <img :src="image" class="w-full h-32 object-cover rounded" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFiles: [],
        previewImages: [],
      };
    },
    methods: {
      handleFileUpload(event) {
        this.selectedFiles = Array.from(event.target.files);
        this.previewImages = this.selectedFiles.map((file) =>
          URL.createObjectURL(file)
        );
      },
      submitForm() {
        // Form submit işlemi burada yapılabilir
        console.log("Selected files:", this.selectedFiles);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS ile stiller */
  </style>
  