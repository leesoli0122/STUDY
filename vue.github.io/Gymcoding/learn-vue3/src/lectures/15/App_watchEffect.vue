<template>
	<div>
		<!-- form을 변경할 때마다 자동으로 저장하는 예제 -->
		<!-- <form action="" @submit.prevent="save(title, contents)">
			<input v-model.lazy="title" type="text" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button>저장</button>
		</form> -->
		<form action="" @submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};

		// watchEffect는 watch와 다르게 기본적으로 최초 한 번 즉시 실행이다
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style></style>
