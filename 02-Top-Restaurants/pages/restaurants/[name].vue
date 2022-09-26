<template>
	<div>{{ name }}</div>
</template>

<script setup lang='ts'>
import {} from '#app'

const route = useRoute()
const name = route.params.name
</script>

<style scoped>

</style>
