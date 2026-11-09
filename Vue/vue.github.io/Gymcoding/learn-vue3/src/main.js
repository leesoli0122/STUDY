import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from './components/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);

//
app.provide('app-message', 'app message 입니다');
app.config.globalProperties.msg = 'hello';
app.config.devtools = true; // vue devtools 활성화
app.provide('msg', 'hello msg');
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
