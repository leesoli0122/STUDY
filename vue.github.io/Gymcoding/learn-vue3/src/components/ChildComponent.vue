<template>
	<div class="card">
		<div class="card-header">Child component</div>
		<div class="card-body">
			<p>appMessage: {{ appMessage }}</p>
			<DeepChild></DeepChild>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
import DeepChild from './DeepChild.vue';
export default {
	name: 'ChildComponent',
	components: {
		DeepChild,
	},
	setup() {
		const appMessage = inject('app-message');
		return { appMessage };
	},
};
</script>

<style></style>
