<script setup>
import ButtonItem from './ButtonItem.vue'
import StoreFront from './icons/IconStoreFront.vue'
</script>

<template>
  <footer class="bg-black-400 p-6 pb-10">
    <h5 class="text-2xl">Join Our Weekly Digest</h5>
    <div class="relative md:w-1/2">
      <input
        placeholder="Enter Your Email Address"
        class="w-full rounded-full mt-6 px-6 py-5 md:pr-20 md:rounded-lg"
      />
      <ButtonItem
        class="w-full rounded-full mt-6 md:absolute md:right-0 md:top-0 md:w-1/4 md:rounded-lg"
        text="Subscribe"
      >
        <template #icon>
          <StoreFront class="fill-white" />
        </template>
      </ButtonItem>
    </div>
  </footer>
</template>
