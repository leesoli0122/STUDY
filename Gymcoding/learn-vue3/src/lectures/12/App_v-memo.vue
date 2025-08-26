<template>
	<div>
		<div v-memo="[subscribers]">
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
		<button v-on:click="subscribers++">subs++</button>
		<button @click="views++">views++</button>
		<button @click="likes++">likes++</button>
		<div>
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return {
			subscribers,
			views,
			likes,
		};
	},
};
</script>

<style>
button {
	background: transparent;
	border: 1px solid #ededed;
	border-radius: 8px;
}
button + button {
	margin-left: 10px;
}
</style>
