<template>
  <div>
    <form v-on:submit.prevent="submitForm"> <!--prevent를 적어주면 e.preventDefault();와 동일한 동작-->
      <!-- id -->
      <div>
        <label for="username">ID: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <!-- pw -->
      <div>
        <label for="password">PW: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function(){
      // event.preventDefault(); //자바스크립트에서 이벤트 동작을 막는 방법
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>