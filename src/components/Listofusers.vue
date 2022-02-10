<template>
    <div :class="tabl">
        <table>
          <tr>
              <td>Index</td>
              <td>User</td>
          </tr>
           <tr v-for="(user,index) of users" :key="index">
              <td>{{index+1}}</td>
              <td>{{user.login}}</td>
          </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
 data: function () {
        return {
          users:null
        }
    },

    mounted() {
        axios.get('https://api.github.com/users')
        .then(response => this.users= response.data);
        }
    }
</script>

<style>
.tabl{
    text-align: center;
}
table{margin: auto;}
</style>