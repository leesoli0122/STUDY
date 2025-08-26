<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

// computed : 반응형 데이터의 종속 관계를 자동으로 세팅하고자 할 때 ex) message에 따라서 어떠한 값이 세팅되어야 할 때
// watch: 반응형 데이터가 변경되는 시점에 돔을 변경하던가 api를 호출해서 다른 비즈니스 로직을 수행할 때 이렇게 복잡한 로직을 수행할 때 watch를 사용하는게 더 효율적
export default {
	setup() {
		const message = ref('hello vue3');
		const reverseMessage = ref('');

		// watch(
		// 	message,
		// 	newValue => {
		// 		reverseMessage.value = newValue.split('').reverse().join('');
		// 	},
		// 	{
		// 		immediate: true,
		// 	},
		// );

		// 위에 watch와 아래 내용 같은 것

		const reverseFunction = () => {
			console.log('즉시실행함');
			reverseMessage.value = message.value.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction();
		return { message, reverseMessage };
	},
};
</script>

<style></style>
