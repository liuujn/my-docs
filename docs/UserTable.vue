<!-- .vitepress/components/UserTable.vue -->
<template>
  <div class="user-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import axios from 'axios'
const users = ref([])

async function fetchUsers() {
  const response = await axios.get('http://localhost:8080/students')
  users.value = response.data
}
onMounted(() => {
  fetchUsers()
})
</script>

<style scoped>
.user-table {
  margin: 1rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: left;
}

th {
  background-color: #f7fafc;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f8fafc;
}
</style>