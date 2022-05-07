import {createRouter, createWebHistory} from 'vue-router';

import AboutUs from '../components/AboutUs.vue'
import JobsPage from '../components/JobsPage.vue'
import JobDetails from '../components/JobDetails.vue'
import NotFound from '../components/NotFound.vue'

const routes =[
    
     {
        path:'/about',
        name:'About',
        component:AboutUs
    },
    {
       path:'/jobs',
       name:'JobsPage',
       component:JobsPage
},{
    path:'/jobdetails/:id',
    name:'JobDetails',
    component:JobDetails,
    props:true
},
//redirect
{
    path:'/all-jobs',
    redirect:'/jobs'
},
//catch all 404
{
   path:'/:catchAll(.*)',
   name:'NotFound',
   component:NotFound
}
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router