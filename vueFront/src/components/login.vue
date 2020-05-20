<template>
<div class="signin">


  <v-app
  style="background: rgba(0,0,0,0);">
    <v-content> 
      <v-container class="fill-height" fluid >
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
         
            <v-card height="700"  color="rgb(255,0,0,0.1)">
            <v-window v-model="step">
                 <v-window-item :value="1">
                  <v-row>
                    <v-col cols="50" md="8">
                      <v-card-text class="mt-12">
                      <h1 class="text-center display-2 teal--text text--accent-3">Sign in</h1>
              

   <v-text-field
    id="pwd"
    v-model="account.id"
    :counter="10"
        label="Account id"
    required
    ></v-text-field>                   
  
  
  <v-text-field 
  id="username"
     v-model="account.username"
     label="Username"
    required></v-text-field>

                            
    <v-text-field
    id="pwd"
    v-model="account.pwd"
    :counter="10"
        label="password"
    required
    type="Password"
    ></v-text-field>

    
         <v-layout align-horizontally justify-center>
            <v-flex xs6>

   
     <v-btn
   
        color="success"
    class="mr-4"
    @click.native="_loginUser">
    Confirm
    
    </v-btn>
    
    <v-btn
   v-if="authorized"
        color="success"
    class="mr-4"
    href="/home " target="_blank">
    Confirm
    
    </v-btn>
    </v-flex >
                          </v-layout>
             
                       </v-card-text>
                      </v-col>
                  </v-row>
                 </v-window-item>
                
            </v-window>            
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
  </div>
  
</template>

<script>
import accountData from "../services/accountData";


export default{


    name:"_login",
    data(){
        return {
            account:{
              id:null,
accounts:[],
currAccount:null,
currIndex:-1,

username:"",

pwd:"",

            },
            loggedIn:false
        };
    },
    methods:{

_loginUser(){

var username=this.account.username;
var location = require('location-href');

var pwd=this.account.pwd;
var id= this.account.id;

if(event){
  alert(username+" and "+pwd);

accountData.findById(id).then(response=>{
this.accounts=response.data;
if((response.data.username==username)&&(response.data.pwd==pwd))
{

alert('hello ' +response.data.username);

console.log(response.data)
this.loggedIn=true;

location.set("/home");
}else{
alert("Incorrect username or password , please re-enter")
}




 }).catch(e=>{
    console.log('errorrr : '+e);
    alert(event.target.tagName+"exceptionnn ocuured");
});}
    },
        notify:function(event)
{
  alert('clicked')
  if(event){alert(event.target.tagName)}
}

    }
};
</script>

<style lang='scss'>
main{
  background-image: url('../assets/backGg.jpg');
  background-SIZE:cover;
}
.link{
  display:inline-block;
  padding: 10px;
}
.router-link-active{

  color: red;
}
</style>