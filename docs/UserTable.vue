
<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>姓名</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.name">
          <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const users = ref([])

onMounted(async () => {
  const res = await fetch('http://127.0.0.1:8080/students')
  users.value = await res.json()
})
</script>