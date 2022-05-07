<template>
 <div>
   <div id="nav">
     
     <router-link :to="{name:'About'}">About</router-link>
          <router-link :to="{name:'JobsPage'}">JobsPage</router-link>

   </div>

   <router-view/>

 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding:30px;
  }

#nav a{
  font-weight:bold;
  color:#2c3e50;
  text-decoration:none;
  padding:10px;
  border-radius:4px;
}
#nav a.router-link-active{
  color:white;
  background-color: crimson;
}
</style>
