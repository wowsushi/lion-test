<script setup>
import NavBar from './components/NavBar.vue'
import DiscoverDigital from './components/DiscoverDigital.vue'
import TrendingCollection from './components/TrendingCollection.vue'
import TopCreators from './components/TopCreators.vue'
import FooterBlock from './components/FooterBlock.vue'
import StoreFront from './components/icons/IconStoreFront.vue'
</script>

<template>
  <header class="flex justify-between items-center p-8 h-[100px]">
    <div class="flex items-center gap-2">
      <StoreFront class="fill-primary-500" />
      <h2 class="text-2xl">NFT Marketplace</h2>
    </div>
    <NavBar />
  </header>

  <main class="mx-auto p-6 max-w-screen-xl">
    <DiscoverDigital />
    <TrendingCollection />
    <TopCreators />
  </main>
  <FooterBlock />
</template>

<style scoped></style>
