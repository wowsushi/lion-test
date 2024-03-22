<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    enum: 'default' | 'outline',
    default: 'default'
  },
  parentClass: {
    type: String
  }
})

const rootClass = computed(() => [
  ' rounded-2xl p-4 flex gap-4 items-center justify-center',
  props.parentClass,
  props.variant === 'outline' && 'border-primary-500 border-2 text-white',
  props.variant === 'default' && 'bg-primary-500'
])
</script>

<template>
  <button :class="rootClass">
    <slot name="icon"></slot>
    {{ text }}
  </button>
</template>
