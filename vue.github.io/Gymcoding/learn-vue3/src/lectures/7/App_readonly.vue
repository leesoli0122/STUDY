<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		const copy = readonly(original);
		original.count++;
		copy.count++;
		console.log(original.count); // 1
		console.log(copy.count); // 1
		return {};
	},
};
</script>

<style></style>
