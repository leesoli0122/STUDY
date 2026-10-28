<template>
	<div>
		<p>문자열 : {{ message }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요');
		return {
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>