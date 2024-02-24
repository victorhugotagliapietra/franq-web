<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const checkTokenExistence = () => {
  if (window.location.pathname === '/financial') {
    const tokenCheckInterval = setInterval(() => {
      const isAuthenticated = localStorage.getItem('userToken')
      if (!isAuthenticated) {
        router.push('/login')
      }
    }, 1000)

    onUnmounted(() => {
      clearInterval(tokenCheckInterval)
    })
  }
}

onMounted(() => {
  checkTokenExistence()
})
</script>

<template>
  <RouterView />
</template>
