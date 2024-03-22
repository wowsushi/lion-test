<script setup>
import { ref } from 'vue'
import ButtonItem from './ButtonItem.vue'
import StoreFront from './icons/IconStoreFront.vue'
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="lg:flex hidden gap-4 items-center">
    <ul class="gap-8 flex">
      <li>
        <a>Marketplace</a>
      </li>
      <li>
        <a>Ranking</a>
      </li>
      <li>
        <a>Connect a wallet</a>
      </li>
    </ul>

    <ButtonItem text="Sign up" class="hidden lg:flex">
      <template #icon>
        <StoreFront class="fill-white" />
      </template>
    </ButtonItem>
  </nav>
  <StoreFront class="fill-white lg:hidden cursor-pointer" @click="toggleMenu" />
  <nav class="lg:hidden absolute inset-0 bg-black-400 z-20" v-if="isMenuOpen" @click="toggleMenu">
    <ul class="gap-8 flex flex-col p-8">
      <li>
        <a>Marketplace</a>
      </li>
      <li>
        <a>Ranking</a>
      </li>
      <li>
        <a>Connect a wallet</a>
      </li>
    </ul>
  </nav>
</template>
