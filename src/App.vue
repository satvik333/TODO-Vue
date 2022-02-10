<template>
  <div id="app">
   <h1>TODO APP</h1>
      <div class="card">
        <router-link to="/todo">TODO</router-link>
      </div>
      <div class="card">
        <router-link to="/users">LIST OF USERS</router-link>
      </div>
      <div class="card">
        <router-view></router-view>
      </div>
  <footer class="card1"><h3>This is footer</h3></footer>
  </div>
</template>

<script>

export default {
  name: 'App',
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
.card{
  margin-top: 20px;
}
.card1{
  margin-top: 150px;
}
</style>
