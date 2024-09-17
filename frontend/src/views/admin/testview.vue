<template>
  <div class="relative overflow-hidden">
    <!-- Kategorilerin sıralandığı yatay liste -->
    <div ref="categoryList" class="flex space-x-4 transition-transform duration-300 ease-in-out">
      <div v-for="(category, index) in visibleCategories" :key="index" class="whitespace-nowrap">
        {{ category.name }}
      </div>
    </div>

    <!-- Sağda '>' ikonu -->
    <button 
      @click="nextCategory" 
      v-if="canScrollNext" 
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [], // API'den gelecek kategori isimleri
      currentIndex: 0, // Şu anki kaydırma başlangıç indexi
      categoriesPerPage: 10, // Aynı anda gösterilecek kategori sayısı
    };
  },
  computed: {
    visibleCategories() {
      return this.categories.slice(this.currentIndex, this.currentIndex + this.categoriesPerPage);
    },
    canScrollNext() {
      return this.currentIndex + this.categoriesPerPage < this.categories.length;
    },
  },
  methods: {
    fetchCategories() {
      // API'den veri çekme işlemi
      // Örnek bir API kullanarak verileri çekiyorum.
      this.categories = [
        { name: "Category 1" },
        { name: "Category 2" },
        { name: "Category 3" },
        { name: "Category 4" },
        { name: "Category 5" },
        { name: "Category 6" },
        { name: "Category 7" },
        { name: "Category 8" },
        { name: "Category 9" },
        { name: "Category 10" },
        { name: "Category 11" },
        { name: "Category 12" },
        { name: "Category 13" },
        { name: "Category 14" },
        { name: "Category 15" },
        { name: "Category 16" },
        { name: "Category 17" },
        { name: "Category 18" },
        { name: "Category 19" },
        { name: "Category 20" },
      ];
    },
    nextCategory() {
      // Kaydırma işlemi
      if (this.canScrollNext) {
        this.currentIndex += this.categoriesPerPage;
      }
    },
  },
  mounted() {
    this.fetchCategories(); // Bileşen monte edildiğinde API'den kategorileri al
  },
};
</script>

<style scoped>
/* Ekstra isteğe bağlı stil */
</style>
