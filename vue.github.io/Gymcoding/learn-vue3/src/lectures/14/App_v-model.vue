<template>
	<div>
		<h2>input value</h2>
		<!-- v-model 없는 버전 -->
		<input
			type="text"
			:value="inputValue"
			v-on:input="event => (inputValue = event.target.value)"
		/>
		<div>{{ inputValue }}</div>
		<!-- v-model 있는 버전 -->
		<!-- <input type="text" v-model.lazy="inputValue2" /> -->
		<!-- <input type="text" v-model.number="inputValue2" /> -->
		<input type="text" v-model.trim="inputValue2" />
		<div>{{ typeof inputValue2 }}</div>
		<hr />
		<h2>textarea value</h2>
		<!-- <textarea
			:value="textareaValue"
			v-on:input="event => (textareaValue = event.target.value)"
		></textarea>
		<div>{{ textareaValue }}</div> -->
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
		<hr />
		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- <input
			type="checkbox"
			id="checkbox"
			:checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)"
		/> -->
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>
		<h2>checkbox values</h2>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			html
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			css
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			javascript
		</label>
		<div>{{ checkboxValues }}</div>
		<hr />
		<h2>radio value</h2>
		<!-- <label for="radio" style="margin-right: 20px">
			<input
				type="radio"
				name="type"
				value="O"
				id="radio"
				:checked="radioValue === 'O'"
				@change="event => (radioValue = event.target.value)"
			/>
			O형
		</label>
		<label for="radio">
			<input
				type="radio"
				name="type"
				value="A"
				id="radio"
				:checked="radioValue === 'A'"
				@change="event => (radioValue = event.target.value)"
			/>
			A형
		</label> -->
		<label for="radio" style="margin-right: 20px">
			<input
				type="radio"
				name="type"
				value="O"
				id="radio"
				v-model="radioValue"
			/>
			O형
		</label>
		<label for="radio">
			<input
				type="radio"
				name="type"
				value="A"
				id="radio"
				v-model="radioValue"
			/>
			A형
		</label>
		<div>{{ radioValue }}</div>
		<hr />
		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);
		const inputValue2 = ref(null);
		const textareaValue = ref('');
		const checkboxValue = ref('Yes');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			inputValue2,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style></style>
