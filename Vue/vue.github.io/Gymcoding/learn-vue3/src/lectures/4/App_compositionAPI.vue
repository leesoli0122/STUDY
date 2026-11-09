<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">Add message</button>
		<h2>일반 메시지</h2>
		<p>{{ normalmessage }}</p>
		<button v-on:click="addNormalMessage">Add message</button>
	</div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue'; // 추가: ref를 Vue에서 가져옴

export default {
	setup() {
		console.log('setup()');
		const reactiveMessage = ref('hello reactive message');
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};
		console.log('isRef(reactiveMessage)', isRef(reactiveMessage));

		let normalmessage = 'hello normal message';
		const addNormalMessage = () => {
			normalmessage = normalmessage + '!';
		};
		console.log('isRef(normalmessage)', isRef(normalmessage));

		onMounted(() => {
			console.log('onMounted');
		});

		onBeforeMount(() => {
			console.log('onBeforeMount');
		});

		return {
			reactiveMessage,
			normalmessage,
			addReactiveMessage,
			addNormalMessage,
		};
	},
};
</script>

<style></style>
