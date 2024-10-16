<template>
  <div>
    <button @click="toggleSidebar" class="sm:hidden m-2 p-4 bg-blue-500 text-white rounded-full shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.553.894l-6 3A1 1 0 017 22v-9.586L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
    </button>

    <div class="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden" v-if="isSidebarOpen" @click="toggleSidebar"></div>

    <div
      class="fixed inset-y-0 left-0 w-64 bg-white p-4 shadow-lg z-30 transform sm:static sm:w-64 transition-transform"
      :class="{ '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }">

      <div class="flex items-center justify-between mb-4">
        <span class="font-bold text-lg">Filter</span>
        <button @click="toggleSidebar" class="sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="mb-6">
        <span class="font-semibold text-sm mb-2 block">Subcategory</span>
        <div class="max-h-40 overflow-y-auto space-y-2">
          <div v-for="(item, index) in subcategories" :key="index" class="flex items-center">
            <input type="radio" :id="'subcategory-' + index" :value="item" v-model="selectedSubcategory" class="mr-2" />
            <label for="subcategory" class="text-sm">{{ getLocalizedName(item) }}</label>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <span class="font-semibold text-sm mb-2 block">Brand</span>
        <div class="max-h-40 overflow-y-auto space-y-2">
          <div v-for="(item, index) in brands" :key="index" class="flex items-center">
            <input type="checkbox" :id="'brand-' + index" class="mr-2" />
            <label :for="'brand-' + index" class="text-sm">{{ item.title }}</label>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <span class="font-semibold text-sm mb-2 block">Price Range</span>
        <div class="flex items-center space-x-2">
          <input type="number" min="0" v-model="minPrice" class="w-full p-2 border rounded" placeholder="0" />
          <span>–</span>
          <input type="number" min="0" v-model="maxPrice" class="w-full p-2 border rounded" placeholder="2199" />
          <span>TMT</span>
        </div>
      </div>

      <div class="mb-4">
        <span class="font-semibold text-sm mb-2 block">Sorted</span>
        <select id="sort" v-model="sortOrder" @change="sortBrands"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: "Test",
  data() {
    return {
      brands: null,
      subcategories: null,
      selectedSubcategory: null,
      minPrice: 0,
      maxPrice: 10000,
      isSidebarOpen: true,
      sortOrder: 'az',
    };
  },
  created() {
    this.allBrands()
    this.allSubcategories()
  },
  methods: {
    sortBrands() {
      console.log(this.sortOrder);
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    getLocalizedName(item) {
      const locale = this.$i18n.locale;
      if (locale === 'tm') return item.name_tm;
      if (locale === 'ru') return item.name_ru;
      if (locale === 'en') return item.name_en;
      return item.name_ru;
    },
    // #############
    async allBrands() {
      const data = await api.get('/brands')
      this.brands = data.data.detail.rows
    },
    async allSubcategories() {
      const data = await api.get('/subcategories')
      this.subcategories = data.data.detail.rows
    },
  }
};
</script>
