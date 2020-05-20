<template>
  
  <v-app
  style="background: rgba(0,0,0,0);">

    <v-app-bar
    app
    extensionHeight="35px"
    class="trasnsparent darken-4 px-2">
  
      <v-tabs align-with-title>
      <v-spacer></v-spacer>

        <v-tab  to="/signup">Sign-up</v-tab>
     
         <v-tab  to="/login">Login</v-tab>

        <v-tab  to ="/about">About</v-tab>
           
      </v-tabs>
 
    </v-app-bar>
  
<router-view/>
  
  </v-app>

</template>

<script>


export default {
  name: 'App',
  components: {



  },

  data: () => ({
    //
  }),
};
</script>

<style lang='scss'>
main{
  background-image: url('./assets/backG2.jpg');
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