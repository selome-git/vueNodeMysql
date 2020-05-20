import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);


export default new Router({


    mode:"history",
    routes:[
{
path:"/",
alias:"/signup",
name:"signup",
component:()=>import("./components/signup")

},

{
    path:"/home",
   
    name:"home",
    component:()=>import("./components/home")
    
    },


{
path:"/about",
name:"about",
component:()=> import("./components/about")


},
{
    path:"/login",
    name:"login",
    component:()=>import("./components/login")
    
    },

    ]
})