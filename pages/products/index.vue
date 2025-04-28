<template>
    <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="p in products" :key="p.id" class="h-full">
                <ProductCard :product="p"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup>
    // definePageMeta({
    //     layout: "products",
    // })

    //fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            {name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })
</script>
