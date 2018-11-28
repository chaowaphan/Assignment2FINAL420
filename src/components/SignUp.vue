<template>
  <div class="sign-up">
  <img :src="require('../assets/2.jpg')" />
  <br><br><h3>สมัครสมาชิก</h3>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button v-on:click="signUp">สมัครสมาชิก</button>
  <p><router-link to="/login">ไปหน้าเข้าสู่ระบบ</router-link>.</p>
</div>


</template>

<script>
  import firebase from 'firebase'


  export default {
    name: 'signUp' ,
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email,this. password).then(
          (user) => {
            this.$router.replace('hello')
          },
          function (err) {
            alert('Oops.' + err.message)
          }
         ); 
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 48px;
  }

  input {
    margin: 10px 0;
    width: 30%;
    padding: 15px;
  }

  img { width: 40%;}

  button {
  padding: 20px 30px;
  background: #b94842;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
}
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;    
  }
  p {
    margin-top: 40px;
    font-size: 25px;
  }

  p a {
    color: #b94842;
    text-decoration: underline;
    cusor: pointer;
  }

  

</style>
