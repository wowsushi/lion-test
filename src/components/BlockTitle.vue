<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  }
})
</script>

<template>
  <div class="md:w-1/2">
    <h4 class="text-3xl md:text-3xl lg:text-4xl">
      <slot name="title">
        {{ title }}
      </slot>
    </h4>
    <p class="mt-2">
      <slot name="content">
        {{ content }}
      </slot>
    </p>
  </div>
</template>
