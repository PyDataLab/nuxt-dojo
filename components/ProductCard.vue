<template>
    <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 h-80">
        <img :src="product.image" alt="product thumb" class="w-full h-48 object-contain rounded-md mb-4">
        <p class="font-semibold text-gray-800 mt-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn mt-4 text-center text-white py-2 px-4 rounded-lg transition-colors">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
/* Custom styles can be added here, but Tailwind will cover most needs */
</style>
