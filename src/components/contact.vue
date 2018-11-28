<template>
  <div class="contact">

    <ul>      
      <br><li>Mawin Purksayakorn  5810110618  </li><br> 
    </ul> 
    <article v-for="(location, idx) in CONTACT" :key="idx">
      <img :src="location.image1">
    </article> 
    
    <ul>  
      <br><li>Nongnapa  Laksana-umporn  5810110164  </li><br>    
    </ul>  
    <article v-for="(location, idx) in CONTACT" :key="idx">
      <img :src="location.image2">
    </article>

    <ul>    
      <br><li>Pakawit Piongsing  5810110256  </li><br>  
    </ul> 
    <article v-for="(location, idx) in CONTACT" :key="idx">
      <img :src="location.image3">
    </article>     
  
    <ul>         
      <br><li>Chaowaphan Boontham  5810110080  </li><br>            
    </ul>
    <article v-for="(location, idx) in CONTACT" :key="idx">
      <img :src="location.image4">
    </article>

    <ul>    
      <br><li>Kanthawat  Phukaew  5810110549  </li><br>  
    </ul> 
    <article v-for="(location, idx) in CONTACT" :key="idx">
      <img :src="location.image5">
    </article> 

    <br><li><router-link to="/hello">Home</router-link></li><br>
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
      CONTACT: []
    }
  },
  firestore () {
    return {
      CONTACT: db.collection('CONTACT')
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