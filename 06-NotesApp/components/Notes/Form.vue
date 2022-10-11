<template>
	<NCard class='card'>
		<input class='input' placeholder='My title' v-model='notesInput.title' />
		<textarea class='input' placeholder='My note' v-model='notesInput.note' />
		<NButton @click='handleSubmit'>Save Note</NButton>
	</NCard>
</template>

<script setup lang='ts'>
const { supabase } = useSupabase()
const { user } = useAuth()

const notesInput = reactive({
	title: '',
	note: ''
})

const handleSubmit = async () => {
	if (!notesInput.title || !notesInput.note) return

	await supabase.from('notes').insert({
		title: notesInput.title,
		note: notesInput.note,
		user_id: user.value.id
	})

	notesInput.title = ''
	notesInput.note = ''
}
</script>

<style scoped>
.card {
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
}
.input {
	border: 0.1rem solid rgba(0, 0, 0, .2);
	border-radius: .25rem;
	margin-bottom: .5rem;
	padding: .25rem;
}
</style>
