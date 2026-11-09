<template>
	<div class="div">
		<div class="text" :class="{ active: isActive, 'text-danger': hasError }">
			<!--text-danger같이 가운데에 -가 있으면 ''로 감싸주면 된다.-->
			텍스트 입니다.
		</div>
		<div :class="[activeClass, errorClass]">배열로 써보기</div>
		<div
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			삼항연산자로 써보기
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggleError</button>
	</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(true);
		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': false,
		// });

		// 객체
		const classObject = computed(() => {
			return {
				active: true && true, //조건이 여러개면 &&를 써준다
				'text-danger': true && true,
				'text-blue': true,
			};
		});
		const toggle = () => {
			isActive.value = !isActive.value;
		};

		// 배열로 써보기
		const activeClass = ref('active');
		const errorClass = ref('error');

		return {
			isActive,
			toggle,
			hasError,
			classObject,
			activeClass,
			errorClass,
		};
	},
};
</script>

<style>
.div {
	padding: 20px;
}
input,
button {
	display: block;
}
input + input,
button + button {
	margin: top 20px;
}
button {
	border: 1px solid #bbb;
	border-radius: 8px;
	background: transparent;
}
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
