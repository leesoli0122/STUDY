<template>
	<div>
		<LabeInput
			:model-value="firstname"
			@update:model-value="value => $emit('update:firstname', value)"
			label="성"
		></LabeInput>
		<LabeInput
			:model-value="lastname"
			@update:model-value="value => $emit('update:lastname', value)"
			label="이름"
		></LabeInput>
	</div>
</template>

<script>
import LabeInput from './LabeInput.vue';
export default {
	props: ['firstname', 'lastname'],
	emits: ['update:firstname', 'update:lastname'],
	components: {
		LabeInput,
	},
	setup() {
		return {};
	},
};
</script>

<style></style>
