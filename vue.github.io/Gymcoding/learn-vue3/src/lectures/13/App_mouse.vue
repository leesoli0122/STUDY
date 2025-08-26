<template>
	<div>
		<div id="modifiers">
			<!-- .capture:먼저 이벤트 실행할 때 -->
			<!-- <div @click.capture="clickDiv">
				DIV 영역
				<p @click="clickP">
					P 영역
					<span @click.stop="clickSapn">SPAN 영역</span>
					<span @click="clickSapn">SPAN 영역</span>
					// .prevent:기본기능 막기 .stop:이벤트 전파 막기
					<a href="https://naver.com" @click.prevent.stop="clickA">A 영역</a>
				</p>
			</div> -->
			<div @click="clickDiv">
				DIV 영역
				<!-- .self:나 자신을 클릭했을 때만 이벤트 실행 -->
				<p @click.self="clickP">
					P 영역
					<!-- <span @click.stop="clickSapn">SPAN 영역</span> -->
					<span @click="clickSapn">SPAN 영역</span>
					<!-- .prevent:기본기능 막기 .stop:이벤트 전파 막기 -->
					<a href="https://naver.com" @click.prevent.stop="clickA">A 영역</a>
				</p>
			</div>
		</div>
		<a href="https://naver.com" @click.prevent="clickA">B 영역</a>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSapn = () => {
			console.log('clickSapn');
			// alert('좋아요');
		};
		const clickA = () => {
			console.log('clickA');
			alert('어떤기능~~');
		};
		return {
			clickDiv,
			clickP,
			clickSapn,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	display: block;
	background-color: #666;
}
button {
	display: block;
}
</style>
