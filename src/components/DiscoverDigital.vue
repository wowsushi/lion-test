<script setup>
import StoreFront from './icons/IconStoreFront.vue'
import ButtonItem from './ButtonItem.vue'
</script>

<template>
  <section class="md:flex flex-col md:h-[350px] lg:h-[500px] flex-wrap">
    <div class="md:w-1/2">
      <h4 class="text-3xl md:text:5xl lg:text-7xl">Lorem Ipsum & Lorem Ipsum</h4>
      <p class="mt-2">
        Sure, here's a random text generated for you: "The quick brown fox jumps over the lazy dog.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      </p>
    </div>

    <figure
      class="relative rounded-3xl bg-black-400 mt-8 pb-2 overflow-hidden md:order-1 md:mt-0 md:ml-8 lg:w-1/2"
    >
      <div class="md:h-[200px] lg:h-auto">
        <img src="/src/assets/image_sample.png" class="w-full md:w-full md:h-full" />
      </div>
      <figcaption class="p-4">aliquip aliquip</figcaption>
      <figure class="flex gap-2 bottom-1 px-4 py-2">
        <img src="/src/assets/image_sample.png" width="20" height="20" class="round" />
        <figcaption>name</figcaption>
      </figure>
    </figure>
    <ButtonItem text="Get Started" class="mt-6 w-full md:w-1/4">
      <template #icon>
        <StoreFront class="fill-white" />
      </template>
    </ButtonItem>

    <ul class="flex justify-between my-4 md:w-1/2">
      <li>
        <h5 class="text-xl">222+</h5>
        <p class="mt-2">Total Sale</p>
      </li>
      <li>
        <h5 class="text-xl">222+</h5>
        <p class="mt-2">Total Sale</p>
      </li>
      <li>
        <h5 class="text-xl">222+</h5>
        <p class="mt-2">Total Sale</p>
      </li>
    </ul>
  </section>
</template>
