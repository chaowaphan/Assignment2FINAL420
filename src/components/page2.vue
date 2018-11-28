<template>

  <div class="page2" >
    <article v-for="(location, idx) in PAGE2" :key="idx">
      <img :src="location.image1">
    </article>
    <article v-for="(location, idx) in PAGE2" :key="idx">
      <img :src="location.image2">
    </article>
    <article v-for="(location, idx) in PAGE2" :key="idx">
      <img :src="location.image3">
    </article>
  

    <ul>      
      <br><li><router-link to="/page3">ตอนต่อไป</router-link></li> <br>
      <br><li><router-link to="/hello">Home</router-link></li><br>       
    </ul>      
    <br><button v-on:click="logout">Logout</button>  
  </div>

</template>

<script>
  import firebase from 'firebase'
import { db } from '../main'
import { compare } from 'semver';


  export default {
  name: 'HelloWorld',
  data () {
    return {
      PAGE2: []
    }
  },
  firestore () {
    return {
      PAGE2: db.collection('PAGE2')
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
       })
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

img{width: 350px;}
ul {
  list-style-type: none;
  padding: 0;
  font-size: 25px;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size: 25px;
}



li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b94842;
}
p {
  font-size: 25px;
}
button {
  padding: 10px 20px;
  background: #b94842;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  outline: 0;
  cursor: pointer;
}
</style>