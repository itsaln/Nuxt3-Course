<template>
  <div :style='isDarkMode ? {backgroundColor: "#000"} : null'>
    <Nav />
		<Heading />
		<Cards />
  </div>
</template>

<script setup lang='ts'>
const { isDarkMode } = useDarkMode()
</script>

<style>
* {
	margin: 0;
	padding: 0;
	font-family: Georgia, sans-serif;
}
</style>
