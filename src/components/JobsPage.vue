<template>
  <div>
      <div v-for="job in jobs" :key="job.id">
       <router-link :to="{name:'JobDetails',params:{id:job.id}}">{{job.title}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
   data(){
       return{
           jobs:[
               {title:'Ninja Designer', id:1, details:'lorem'},
               {title:'Ninja web developer', id:2, details:'lorem'},
               {title:'Ninja Vue ', id:3, details:'lorem'}
           ]
       }
   }
}
</script>

<style>

</style>