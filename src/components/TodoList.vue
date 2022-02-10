<template>
  <div>
      <div v-for="(todo,index) in todos" :key="index" >
        <input type="text" :id="`input` + index" :disabled="todo.disabled" :value="todo.title">
        <span>
          <button @click="removeTodo(todo)">Delete</button>
          <button v-if="todo.disabled" @click="edit(todo, index)">Edit</button>
          <button v-if="!todo.disabled" @click="save(todo, index)">Save</button>
        </span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
   return{
     show:true,
     index:"",
     disable: true,
   }
 },
  computed:{
    todos(){
      return this.$store.state.todos;
    }
},
  methods: {
      removeTodo(todo){
        this.$store.dispatch('deleteTodo', todo);
        this.$toasted.show('Deleted').goAway(1500);
      },
      edit(todo){
        todo.disabled = false;
      },
      save(todo, index) {
        this.todos.forEach((todo1) => {
        if(todo1.title == todo.title){
          let todovalue = document.getElementById('input' + index);
          todo1.title = todovalue.value;
        }
          todo.disabled = true;
      });
      this.$toasted.show('Edited').goAway(1500);
      }
    },
  };
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>