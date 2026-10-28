<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref -> Object
		const count = ref(0);
		const state = reactive({
			count, //count: count 값이 같으면 생략 가능
		});

		count.value++;

		//console.log(count.value); // 반응형으로 접근하기 위해서. 콘솔 창에서 값은 0으로 맞게 나온다.
		// console.log('state.count: ', state.count.value); 반응형으로 접근하겠다는 생각으로 똑같이 value를 넣어줬지만 콘솔창에 값은 state.count:  undefined로 나온다.
		//console.log('state.count: ', state.count); // 콘솔 창 값이 state.count:  0으로 맞게 나온다.
		// ref -> Array
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0]: ', arr[0].value);
		return {};
	},
};
</script>

<style></style>
