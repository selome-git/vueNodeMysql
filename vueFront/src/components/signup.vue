<template>
<div class="signup">

  <v-app
  style="background: rgba(0,0,0,0.5);">
    <v-content> 
      <v-container class="fill-height" fluid >
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
         
            <v-card height="800"  color="rgb(255,0,0,0)">
            <v-window v-model="step">
                 <v-window-item :value="1">
                  <v-row>
                    <v-col cols="50" md="8">
                      <v-card-text class="mt-12">
                      <h1 class="text-center display-2 teal--text text--accent-3">Signup</h1>
              

  <v-text-field 
                       id="id"
     v-model="account.id"
     label="Account id(Don't forget your id as it's what you will use to login)"
    required></v-text-field>

                       <v-text-field 
                       id="fname"
     v-model="account.fname"
     label="First name"
    required></v-text-field>

                      <v-text-field 
                      id="lname"
     v-model="account.lname"
    
    label="Last name"
    required></v-text-field>
    
  <v-text-field 
  id="username"
     v-model="account.username"
     label="Username"
    required></v-text-field>

      <v-text-field
      id="email" 
     v-model="account.email"
    :rules="emailRules"
    label="E-mail"
    required></v-text-field>

                         <v-text-field 
                         id="phone"
     v-model="account.phone"
    :rules="phoneRule"
    
    label="Phone number"
    required></v-text-field>

    <v-text-field
    id="pwd"
    v-model="account.pwd"
    :counter="10"
        label="password"
    required
    type="Password"
    ></v-text-field>

     <v-text-field
    id="conPwd"
    v-model="account.conPwd"
    :counter="10"
        label="Confirm password"
    required
    type="Password"
    ></v-text-field>
         <v-layout align-horizontally justify-center>
            <v-flex xs6>

   
    <v-btn 
    href="/login" target="_blank"
        color="success"
    class="mr-4"
    @click.native="_registerUser">
    Sign-up
    
    </v-btn>
    
    </v-flex>
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
    name:"_register",
    data(){
        return {
            account:{
              id:"",
fname:"",

lname:"",
username:"",
email:"",
phone:"",
pwd:"",
conPwd:"",
            },
           
        };
    },
    methods:{
_registerUser(){
var data={
  id:this.account.id,
fname:this.account.fname,
lname:this.account.lname,
username:this.account.username,
email:this.account.email,
phone:this.account.phone,
pwd:this.account.pwd,
conPwd:this.account.conPwd,

};
if(event){
  
accountData.create(data).then(response=>{
this.account.id=response.data.id;
console.log('hello ' +response.data);

this.registerd=true;
 }).catch(e=>{
    console.log('errorrr: '+e);
    alert(event.target.tagName);
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