<template>
    <div>
            <todoform></todoform>
          <div>
            <todo-list></todo-list>
          </div>
    </div>
</template>

<script>
import Todoform from './Todoform.vue';
import TodoList from './TodoList.vue';

export default {
  components: { Todoform,TodoList},
  
};
</script>

<style scoped>

</style>