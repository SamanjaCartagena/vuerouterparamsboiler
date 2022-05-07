<template>
 <div>
   <div id="nav">
     
     <router-link :to="{name:'About'}">About</router-link>
          <router-link :to="{name:'JobsPage'}">JobsPage</router-link>

   </div>
   <button @click="redirect">Redirect</button>
   <button @click="back">Go back</button>
   <button @click="forward">Go forward</button>
   <router-view/>

 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  },
  methods:{
     redirect(){
       this.$router.push({name:'About'})
     },
    back(){
      this.$router.go(-1)
    },
    forward()
    {
      this.$router.go(1)
    }
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
button{
  margin:0 10px;
  padding:10px;
  border:none;
  border-radius:4px;
}
</style>
