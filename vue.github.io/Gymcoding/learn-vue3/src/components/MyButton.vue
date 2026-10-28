<template>
	<div class="p-3 bg-danger">
		<!-- v-bind="$attrs" -->
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
		<!--
      {{ $attrs }}
      - `props`와 달리 **Non-Prop 속성**은 JavaScript에서 원래 대소문자를 유지하므로 `foo-bar`와 같은 속성은 `$attrs[’foo-bar’]`로 접근해야 합니다.
      - `@click`과 같은 `v-on`리스너는 `$attrs.onClick`과 같이 함수로 접근할 수 있습니다.
    -->
	</div>
</template>

<script>
export default {
	// inheritAttrs: false,
	emits: ['click'],
	setup(props, { emit }) {
		// console.log('context.attrs:', context.attrs);
		// console.log('class:', context.attrs.class);
		// console.log('id:', context.attrs.id);
		// console.log('onClick:', context.attrs.onClick);
		// context.attrs.onClick();
		const sayHello = () => {
			emit('click');
		};
		return { sayHello };
	},
};
</script>

<style></style>
