<template>
	<div>
		<NCard class='card'>
			<div v-if='!showConfirmEmailMessage'>
				<h3>{{ authState }}</h3>
				<div class='input-container'>
					<input placeholder='Email' v-model='input.email' type='email' />
					<input placeholder='Password' v-model='input.password' type='password' />
				</div>
				<NButton @click='handleSubmit'>Submit</NButton>
				<NButton @click='signOut'>signOut</NButton>
				<p v-if='authError' class='error'>{{ authError }}</p>
				<p @click='toggleAuthState'>{{ authState === 'login' ? "Don't have an account? Create one now" : "Already have an account? Go ahead an login" }}</p>
			</div>
			<div v-else>
				<h3>Check email for confirmation message</h3>
			</div>
		</NCard>
	</div>
</template>

<script setup lang='ts'>
const authState = ref<'login' | 'signup'>('login')
const authError = ref('')
const showConfirmEmailMessage = ref(false)
const input = reactive({
	email: '',
	password: ''
})
const router = useRouter()

const { user, signUp, signIn, signOut } = useAuth()

const toggleAuthState = () => {
	if (authState.value === 'login') authState.value = 'signup'
	else authState.value = 'login'
	authError.value = ''
}

const handleSubmit = async () => {
	try {
		if (authState.value === 'login') {
			await signIn({ email: input.email, password: input.password })
			await router.push('/myprofile')
			authError.value = ''
		} else {
			await signUp({ email: input.email, password: input.password })
			showConfirmEmailMessage.value = true
		}
		input.email = ''
		input.password = ''
	} catch (e) {
		authError.value = e.message
	}
}
</script>

<style scoped>
.card {
	width: 25rem;
	padding: 1rem;
}

.card h3 {
	font-size: 1.75rem;
	text-transform: capitalize;
	margin-bottom: 1rem;
}

.input-container {
	display: flex;
	flex-direction: column;
}

.input-container input {
	margin-bottom: .5rem;
	padding: .2rem;
	outline: none;
	border: 0.1rem solid rgba(0, 0, 0, 0.3);
	border-radius: .2rem;
}

p {
	color: blue;
	font-size: 0.75rem;
	cursor: pointer;
	margin-top: 0.5rem;
}

.error {
	color: red;
}
</style>
