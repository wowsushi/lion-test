<script setup>
import BlockTitle from './BlockTitle.vue'
</script>

<template>
  <section class="my-6 md:my-22">
    <BlockTitle>
      <template #title>Trending Collection</template>
      <template #content>
        Sure, here's a random text generated for you: "The quick brown fox jumps over the lazy dog.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      </template>
    </BlockTitle>
    <div class="flex gap-8">
      <div class="flex-1">
        <div class="rounded-2xl w-full relative overflow-hidden flex-1 basis-full mb-4 mt-8">
          <div class="relative w-full pt-[100%]"></div>
          <img
            src="/src/assets/image_sample.png"
            class="absolute top-0 object-cover w-full h-full"
          />
        </div>
        <ul class="my-6 flex gap-4">
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <img
              src="/src/assets/image_sample.png"
              class="absolute top-0 object-cover w-full h-full"
            />
          </li>
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <img
              src="/src/assets/image_sample.png"
              class="absolute top-0 object-cover w-full h-full"
            />
          </li>
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <div class="bg-primary-500 flex items-center justify-center absolute top-0 inset-0">
              1234+
            </div>
          </li>
        </ul>
        <h5 class="text-xl">DSGN Animals</h5>
        <div class="flex gap-2 mt-2">
          <img src="/src/assets/image_sample.png" width="24" height="24" />
          <p>MrFox</p>
        </div>
      </div>
      <div class="hidden md:block flex-1">
        <div class="rounded-2xl w-full relative overflow-hidden flex-1 basis-full mb-4 mt-8">
          <div class="relative w-full pt-[100%]"></div>
          <img
            src="/src/assets/image_sample.png"
            class="absolute top-0 object-cover w-full h-full"
          />
        </div>
        <ul class="my-6 flex gap-4">
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <img
              src="/src/assets/image_sample.png"
              class="absolute top-0 object-cover w-full h-full"
            />
          </li>
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <img
              src="/src/assets/image_sample.png"
              class="absolute top-0 object-cover w-full h-full"
            />
          </li>
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <div class="bg-primary-500 flex items-center justify-center absolute top-0 inset-0">
              1234+
            </div>
          </li>
        </ul>
        <h5 class="text-xl">DSGN Animals</h5>
        <div class="flex gap-2 mt-2">
          <img src="/src/assets/image_sample.png" width="24" height="24" />
          <p>MrFox</p>
        </div>
      </div>
      <div class="hidden lg:block flex-1">
        <div class="rounded-2xl w-full relative overflow-hidden flex-1 basis-full mb-4 mt-8">
          <div class="relative w-full pt-[100%]"></div>
          <img
            src="/src/assets/image_sample.png"
            class="absolute top-0 object-cover w-full h-full"
          />
        </div>
        <ul class="my-6 flex gap-4">
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <img
              src="/src/assets/image_sample.png"
              class="absolute top-0 object-cover w-full h-full"
            />
          </li>
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <img
              src="/src/assets/image_sample.png"
              class="absolute top-0 object-cover w-full h-full"
            />
          </li>
          <li class="rounded-2xl w-full relative overflow-hidden">
            <div class="relative w-full pt-[100%]"></div>
            <div class="bg-primary-500 flex items-center justify-center absolute top-0 inset-0">
              1234+
            </div>
          </li>
        </ul>
        <h5 class="text-xl">DSGN Animals</h5>
        <div class="flex gap-2 mt-2">
          <img src="/src/assets/image_sample.png" width="24" height="24" />
          <p>MrFox</p>
        </div>
      </div>
    </div>
  </section>
</template>
