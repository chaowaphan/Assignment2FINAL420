<template>
  <div class="login">
  <img :src="require('../assets/2.jpg')" />
  <h3>หน้าเข้าสู่ระบบ</h3>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button v-on:click="signIn">เข้าสู่ระบบ</button>
  <p><router-link to="/sign-up">ไปหน้าสมัครสมาชิก</router-link></p>
</div>


</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'login' ,
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function(){
          firebase.auth().signInWithEmailAndPassword(this.email,this. password).then(
            (user) => {
              this.$router.replace('hello')
          },
            (err) => {
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
