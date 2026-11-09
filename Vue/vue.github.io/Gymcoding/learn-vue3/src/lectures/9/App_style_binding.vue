<template>
	<div class="div">
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque
			consequatur non doloremque accusantium temporibus tempora velit,
			necessitatibus, delectus nulla soluta reiciendis minus fuga numquam est ut
			tempore error alias!
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '14px',
		// });
		const fontSize = ref(14);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return { fontSize, styleObject };
	},
};
</script>

<style>
.div {
	padding: 20px;
}
input {
	display: block;
}
input + input {
	margin-top: 20px;
}
button + button {
	margin-left: 10px;
}
button {
	border: 1px solid #bbb;
	border-radius: 50%;
	background: transparent;
	margin-top: 10px;
	padding: 0 10px;
	font-size: 20px;
}
</style>
