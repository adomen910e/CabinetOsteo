<template>
    <div class="flex flex-wrap justify-center">
        <NuxtLink
            :to="`/priseRdv?title=${title}`"
            class="max-w-xs mx-2 my-4 bg-blanc shadow-lg rounded-lg overflow-hidden box-border transition duration-200 border border-gray-300"
            exact-active-class="active-link"
        >
            <div class="m-2 sm:m-4">
                <img class="w-full object-cover transition-transform duration-200 transform hover:scale-110" :src="image"
                    :alt="title" />
            </div>
            <div class="p-2 sm:p-4">
                <h2 class="text-lg sm:text-xl font-semibold text-gray-800">{{ title }}</h2>
                <p class="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">{{ description }}</p>
                <div class="mt-2 sm:mt-4">
                    <button
                        class="w-full bg-blue-500 text-white font-semibold py-1 sm:py-2 rounded hover:bg-blue-600 transition duration-200">
                        {{ buttonText }}
                    </button>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'PageCard',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        buttonText: {
            type: String,
            default: 'Action',
        },
    },
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés ici si nécessaire */
</style>