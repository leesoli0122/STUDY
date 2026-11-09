<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<p v-html="htmlStr"></p>
		<p v-text="htmlStr"></p>
		<p v-pre>{{ msg 안녕하세요 }}</p>
		<!-- v-once: 한번만 렌더링 됨-->
		<p v-once>{{ msg }}!!!</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<stron>안녕!!!</stron>');
		return {
			msg,
			htmlStr,
		};
	},
};
</script>

<style></style>
