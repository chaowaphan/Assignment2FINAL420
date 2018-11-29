<template>
  <div class="page3">
    
    <article v-for="(location, idx) in PAGE3" :key="idx">
      <img :src="location.image">    
    </article>

    <ul>            
      <br><li><router-link to="/hello">Home</router-link></li> <br>      
    </ul>      
    <br><button v-on:click="logout">Logout</button>  
  </div>
</template>

<script>
  import firebase from 'firebase'
import { db } from '../main'
import { compare } from 'semver';
export default {  
  data () {
    return {
      PAGE3: []
    }
  },
  firestore () {
    return {
      PAGE3: db.collection('PAGE3').orderBy('num')
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
       })
    }
  }
  
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

img{width: 40%;}
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