<template>
	<div>
		<Html :lang='dynamic > 50 ? "en-GB" : "en-US"'>
		<Head>
			<Title>Restaurantly</Title>
			<Meta name='description' content='My page is cool' />
			<Link rel='preload' href='https://cdn-icons-png.flaticon.com/512/4989/4989793.png' as='script' />
		</Head>
		</Html>
		<div class='container'>
			<h1>Welcome to Restaurantly</h1>
			<NuxtLink href='/restaurants'>Go to restaurants</NuxtLink>
		</div>
	</div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.container {
	text-align: center;
	margin-top: 5rem;
}
</style>
