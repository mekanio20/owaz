<template>
  <div class="flex space-x-4 p-4">
    <!-- Category Dropdown -->
    <div class="relative">
      <button
        class="px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none flex justify-between items-center"
        @click="toggleDropdown('category')">
        {{ selectedCategory }}
        <span class="ml-2">&#9662;</span>
      </button>
      <div
        v-if="openDropdown === 'category'"
        class="absolute mt-2 w-full bg-white shadow-lg rounded-md">
        <ul>
          <li
            v-for="category in categories"
            :key="category"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            @click="selectOption('category', category)">
            {{ category }}
          </li>
        </ul>
      </div>
    </div>

    <div class="relative">
      <button
        class="px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none flex justify-between items-center"
        @click="toggleDropdown('brand')">
        Brand {{ brandValue }}
        <span class="ml-2">&#9662;</span>
      </button>
      <div
        v-if="openDropdown === 'brand'"
        class="absolute mt-2 w-full bg-white shadow-lg rounded-md">
        <ul>
          <li
            v-for="brand in brands"
            :key="brand"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            @click="selectOption('brand', brand)">
            {{ brand }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDropdown: null,
      brandValue: null,
      selectedCategory: "Acoustic Guitars",
      categories: ["Acoustic Guitars", "Electric Guitars", "Bass Guitars"],
      brands: ["Fender", "Gibson", "Ibanez", "Yamaha"],
    };
  },
  methods: {
    toggleDropdown(type) {
      this.openDropdown = this.openDropdown === type ? null : type;
    },
    selectOption(type, value) {
      if (type === "brand") {
        this.brandValue = value;
      }
      if (type === "category") {
        this.selectedCategory = value;
      }
      this.openDropdown = null
    },
  },
};
</script>