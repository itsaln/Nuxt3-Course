<template>
	<nav>
		<ul>
			<li>
				<NuxtLink to='/'>Home</NuxtLink>
			</li>
			<li>
				<NuxtLink to='/myprofile'>My Profile</NuxtLink>
			</li>
			<li v-if='isLoggedIn()' class='logout' @click='signOut'>Logout</li>
		</ul>
	</nav>
</template>

<script setup lang='ts'>
const { signOut, isLoggedIn } = useAuth()
</script>

<style scoped>
nav {
	background-color: #000;
	height: 10vh;
}

ul {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 2rem;
}

li {
	color: #fff;
	margin-right: 1rem;
}

.logout {
	margin-left: auto;
	cursor: pointer;
}
</style>
