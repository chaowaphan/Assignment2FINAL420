<template>
  <div class="hello">
    <h1>{{ msg }}</h1>   

    <head1>
    <ul>      
      <li><router-link to="/page1">เรื่องที่ 1</router-link></li> 
    </ul> 
    <article v-for="(location, idx) in HOME" :key="idx">
      <img :src="location.image1">
    </article> 
    </head1>

    <head2>
    <ul>  
      <li><router-link to="/page2">เรื่องที่ 2</router-link></li>    
    </ul>  
    <article v-for="(location, idx) in HOME" :key="idx">
      <img :src="location.image2">
    </article>
    </head2>

    <head3>
    <ul>    
      <li><router-link to="/page3">เรื่องที่ 3</router-link></li>  
    </ul> 
    <article v-for="(location, idx) in HOME" :key="idx">
      <img :src="location.image3">
    </article>
    </head3>

    <ul>    
      <li><router-link to="/contact">Contact us</router-link></li>  
    </ul>
       
   
    <button v-on:click="logout">ออกจากระบบ</button>
           
  </div>
</template>

<script>
  import firebase from 'firebase'
import { db } from '../main'
import { compare } from 'semver';


export default {
  name: 'hello',
  data () {
    return {
      HOME: []
    }
  },
  firestore () {
    return {
      HOME: db.collection('HOME')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  
  font-size: 40px;
}

img { width: 35%;}

a {
  color: #b94842;
}
button {
  padding: 40px 40px;
  background: #b94842;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  outline: 0;
  cursor: pointer;
}
</style>
