<template>
	<div>
		<Html :lang='dynamic > 50 ? "en-GB" : "en-US"'>
		<Head>
			<Title>Top 50 Restaurants in the World</Title>
			<Meta name='description' content='My page is cool' />
			<Link rel='preload' href='https://cdn-icons-png.flaticon.com/512/4989/4989793.png' as='script' />
		</Head>
		</Html>
		<NuxtLayout name='custom'>
			<div class='container'>
				<RestaurantTable />
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup lang='ts'>

</script>

<style scoped>

</style>
