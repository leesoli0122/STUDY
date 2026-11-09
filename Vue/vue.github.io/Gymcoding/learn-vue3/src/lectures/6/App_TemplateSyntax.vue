<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">click</button>
		<hr />
		<h2>v-html</h2>
		<p>{{ rwaHtml }}</p>
		<p v-html="rwaHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
		<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
		<input v-bind="attrs" />
		<hr />
		<h2>JavaScript</h2>
		{{ message.split('').reverse().join('') }} <br />
		{{ isInputDisabled ? '예' : '아니요' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요!');
		const rwaHtml = ref('<stron>안녕하세요</stron>');
		const dynamicTitle = ref('안녕하세요!!!');
		const isInputDisabled = ref(false);
		const attrs = ref({
			type: 'password',
			value: '12345678',
			disabled: false,
		});

		return {
			message,
			rwaHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style>
input {
	display: block;
}
input + input {
	margin-top: 15px;
}
</style>
