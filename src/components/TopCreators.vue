<script setup>
import BlockTitle from './BlockTitle.vue'
import ButtonItem from './ButtonItem.vue'
import StoreFront from './icons/IconStoreFront.vue'

const list = [
  {
    key: 1,
    name: 'Keepitreal',
    avatar: '/src/assets/image_sample.png',
    total: 34.54
  },
  {
    key: 2,
    name: 'Keepitreal2',
    avatar: '/src/assets/image_sample.png',
    total: 34.54
  },
  {
    key: 3,
    name: 'Keepitreal3',
    avatar: '/src/assets/image_sample.png',
    total: 34.54
  },
  {
    key: 4,
    name: 'Keepitreal4',
    avatar: '/src/assets/image_sample.png',
    total: 34.54
  },
  {
    key: 5,
    name: 'Keepitreal5',
    avatar: '/src/assets/image_sample.png',
    total: 34.54
  }
]
</script>

<template>
  <section class="md:my-16">
    <div class="flex justify-between">
      <BlockTitle>
        <template #title>Top Creators</template>
        <template #content>
          Sure, here's a random text generated for you: "The quick brown fox jumps over the lazy
          dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut
        </template>
      </BlockTitle>
      <div class="flex items-center">
        <ButtonItem class="hidden md:flex" variant="outline" text="View Rankings">
          <template #icon>
            <StoreFront class="fill-primary-500" />
          </template>
        </ButtonItem>
      </div>
    </div>

    <ul class="my-6 md:grid-cols-2 md:grid gap-6 lg:grid-cols-4">
      <li
        v-for="item in list"
        :key="item.key"
        class="my-6 rounded-2xl bg-black-400 p-4 flex md:my-0 lg:flex-col items-center lg:relative"
      >
        <figure
          class="relative flex items-center w-[60px] h-[60px] lg:static lg:w-[120px] lg:h-[120px]"
        >
          <img :src="item.avatar" class="rounded-full w-full h-full" />
          <figcaption
            class="absolute top-0 left-0 bg-black-500 p-1 rounded-full flex items-center justify-center w-6 h-6 lg:top-4 lg:left-4"
          >
            {{ item.key }}
          </figcaption>
        </figure>
        <div class="ml-4 lg:mt-4">
          <h5 class="text-2xl text-center">{{ item.name }}</h5>
          <p class="mt-1">
            <span class="text-black-300">Total Sales: </span>
            {{ item.total }} ETH
          </p>
        </div>
      </li>
    </ul>
    <ButtonItem class="w-full md:hidden" variant="outline" text="View Rankings">
      <template #icon>
        <StoreFront class="fill-primary-500" />
      </template>
    </ButtonItem>
  </section>
</template>
