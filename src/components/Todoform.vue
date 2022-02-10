<template>
<form @submit.prevent="sendMessage"> 
  <div>
    <input type="text" v-model="newTodoItem"  required/>
    <button type="submit" @click="addNewTodoItem()">Submit</button>
  </div>
</form>
</template>

<script>

export default {
  
  data() {
    return {
      newTodoItem: "",
      };
  },
   
  methods: {
    addNewTodoItem() {
      if(this.newTodoItem==""){
        this.$toasted.show('Please fill').goAway(1500);
      }
      else{
        this.$store.dispatch("addNewTodo", this.newTodoItem);
        this.newTodoItem = "";
        this.$toasted.show('Added').goAway(1500);
        } 
      }
    }
  };
</script>

<style>
</style>