<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Login</h2>
      <form @submit.prevent="login">
        <!-- Email Input -->
        <div class="form-control">
          <label class="label" for="email">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" v-model="email" required />
        </div>

        <!-- Password Input dengan Toggle -->
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" placeholder="password"
              class="input input-bordered w-full pr-10" v-model="password" required />
            <span class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              @click="showPassword = !showPassword">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="text-gray-400"></i>
            </span>
          </div>
        </div>

        <!-- Tahun Periode -->
        <div class="form-control">
          <label class="label" for="tahun">
            <span class="label-text">Tahun Periode</span>
          </label>
          <select class="select select-bordered w-full" v-model="tahun" required>
            <option disabled value="">Pilih Tahun</option>
            <option v-for="t in tahunList" :key="t" :value="t">{{ t }}</option>
          </select>
        </div>

        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const tahun = ref('')
const showPassword = ref(false)
const router = useRouter()

// Generate 4 tahun terakhir
const tahunList = ref<number[]>([])
const currentYear = new Date().getFullYear()
for (let i = 0; i < 4; i++) {
  tahunList.value.push(currentYear - i)
}
tahun.value = currentYear.toString() // Set tahun default

const login = () => {
  console.log('Login berhasil!')
  console.log('Tahun Periode:', tahun.value)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  for (let i = 0; i < 10; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  localStorage.setItem('token', token)
  router.push('/dashboard')
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>
