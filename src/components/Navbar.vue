<template>
    <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <router-link to='/' class="navbar-brand">
        <img style="max-height:25px" alt="Vue logo" src="../assets/logo.png">
        Task Manager
      </router-link>
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact>
            Home
          </router-link>
        </li>
        <li class="nav-item">
           <router-link to="/tasks" class="nav-link" exact>
            Tasks
          </router-link>          
        </li>

        <li class="nav-item">
           <router-link to="/register" class="nav-link" exact>
            Register
          </router-link>          
        </li>

        <li class="nav-item">
           <router-link to="/login" class="nav-link" exact>
            Log in
            </router-link>         
        </li>

        <li class="nav-item">
           <router-link to="/logout" class="nav-link" exact>
           Log out
           </router-link>          
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">{{username ? username: "User"}}</a>
        </li>
        
      </ul>
      
    </div>
  </nav>
</header>
</template>


<script>
import { mapState } from 'vuex'
export default {
  
   computed:{
            ...mapState([
                'username'
            ])
        },
}
</script>
