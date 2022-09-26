<template>
	<div class='row' v-if='isHeader'>
		<h4 class='header'>Rank</h4>
		<h4 class='header'>Chain</h4>
	</div>
	<div
		v-else
		class='row'
		:style='index % 2 === 0 ? {backgroundColor: "rgba(128, 128, 128, 0.15)"} : null'
	>
		<h4 class='header rank'>{{ rank }}</h4>
		<a href='`restaurants/${name}`' class='header link'>{{ name }}</a>
	</div>
</template>

<script setup lang='ts'>
interface RowProps {
	name: string
	rank: number
	index: number
	isHeader: boolean
}

const props = defineProps<RowProps>()
</script>

<style scoped>
.row {
	border-top: 1px solid rgba(128, 128, 128, 0.336);
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
}

.header {
	width: 4rem;
	font-size: 1.25rem;
	font-weight: 700;
	color: rgba(10, 31, 148, 1);
	margin: 0;
	/*margin-right: 2rem;*/
	padding: 0.5rem 1rem;
}

.rank {
	color: #000;
}

.link {
	font-weight: 500;
	color: rgba(228, 157, 27, 1);
	text-decoration: none;
	width: auto;
}
</style>
