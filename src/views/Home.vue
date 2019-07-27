<template> 
   <div class="custom-home">
     <HelloWorld/>
   </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  beforeCreate: function() {
    fetch(this.$store.state.apiUrl + "/api/user")
    .then(res =>{
      console.log("Here is the await response...:", res.json()) 
    })
    
    
  }
}
</script>
