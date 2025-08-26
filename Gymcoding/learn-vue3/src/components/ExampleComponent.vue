<template>
	<div>
		<main>
			<div class="container py-4">
				<!-- @click="sayHello" -->
				<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
				<LabeInput label="이름" data-id="id입니다"></LabeInput>
				<hr />
				<FancyButton>click<span style="color: plum"> @@@</span></FancyButton>
				<FancyButton>
					<template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
				</FancyButton>
				<hr />
				<AppCard>
					<!-- <template #[slotArgs]>제목입니다</template> -->
					<!-- <template v-slot:default>내용입니다</template> -->
					<!-- 암시적으로 default 슬롯입니다.
					<template #footer>푸터입니다</template> -->
					<template #header="{ headerMessage }">{{ headerMessage }}</template>
					<template #default="{ childMessage, helloMessage }"
						>디폴트입니다. {{ message }} {{ childMessage }}<br />{{
							helloMessage
						}}</template
					>
					<template #footer="{ footerMessage }">{{ footerMessage }}</template>
				</AppCard>
				<hr />
				<AppCard>
					<slot name="footer" footer-message="푸터 메시지"></slot>
				</AppCard>
			</div>
		</main>
	</div>
</template>

<script>
import MyButton from './MyButton.vue';
import LabeInput from './LabeInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabeInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요!');
		};
		const slotArgs = ref('header');
		const message = ref('안녕하세요');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style></style>
