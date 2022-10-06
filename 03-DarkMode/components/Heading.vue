<template>
	<div class='container'>
		<div class='content-container'>
			<div class='text-container'>
				<h4>Based on your reading history</h4>
				<h2>Designing search for mobile apps</h2>
				<p class='date'>Aug 26th, 2021, 4pm</p>
				<p class='snippet'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa distinctio nemo quod repudiandae similique
					sunt ullam. Animi doloremque harum incidunt molestiae pariatur. Amet aut consequatur dolore est, eveniet
					facilis harum nemo nisi perspiciatis praesentium quidem ratione sit tempora, vitae voluptas. Dolorum error eum
					facere recusandae velit? Commodi debitis delectus ducimus facere in incidunt ipsum iure laboriosam laborum
					libero magnam magni nobis, non nostrum omnis qui quisquam soluta tempore vero!
				</p>
			</div>
			<img
				src='https://media.istockphoto.com/photos/mobile-responsive-website-development-wireframe-design-preview-on-picture-id844419966?b=1&k=20&m=844419966&s=170667a&w=0&h=Dfps34xqMI2CaLkKMznJnESU4G_XY5evvlC9ui9XEJk='
				alt=''
			/>
		</div>
	</div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
h4 {
	text-transform: uppercase;
	font-size: 20px;
	color: grey;
}

h2 {
	margin-top: 15px;
	font-size: 40px;
}

.date {
	margin-top: 15px;
}

.content-container {
	display: flex;
}

.text-container {
	padding-right: 50px;
}

.snippet {
	margin-top: 30px;
	font-size: 20px;
	line-height: 30px;
}

.container {
	width: 50%;
	margin: 0 auto;
	padding: 50px 0;
}
</style>
