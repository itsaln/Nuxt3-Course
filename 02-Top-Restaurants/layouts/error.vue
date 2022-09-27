<template>
	<div>
		<slot name='header' />
		<div>
			<img
				src=' https://cdn-icons-png.flaticon.com/512/4989/4989793.png'
				alt=''
			/>
		</div>
		<slot name='redirectEl' />
	</div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
img {
	width: 10rem;
}
</style>
