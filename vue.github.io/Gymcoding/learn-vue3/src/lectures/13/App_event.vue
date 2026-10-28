<template>
	<div>
		<button v-on:click="printEventInfo('hello vue3', $event)">
			inline envent handler
		</button>
		<hr />
		<!-- 키보드 누르면 콘솔창에 어떤 키보드를 눌렀는지 볼 수 있음 -->
		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message: ', message);
			console.log('event.target: ', event.target);
			console.log('event.target.tagName: ', event.target.tagName);
		};
		const onKeyupHandler = event => {
			console.log('event.key: ', event.key);
		};
		return {
			printEventInfo,
			onKeyupHandler,
		};
	},
};
</script>

<style>
input,
button {
	display: block;
}
input + input {
	margin: top 20px;
}
button {
	border: 1px solid #bbb;
	border-radius: 8px;
	background: transparent;
}
</style>
