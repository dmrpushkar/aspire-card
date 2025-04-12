<template>
  <div class="cards-header q-pa-md" style="border: 1px solid red;">
    <div class="header-top row items-center justify-between q-mb-md" style="border: 1px dashed blue;">
      <CardBalance />
      <q-btn
        label="Add New Card"
        color="primary"
        unelevated
        size="sm"
        style="border: 1px solid green;"
      />
    </div>

    <div class="header-tabs" style="border: 1px dashed orange;">
      <q-tabs
        v-model="selectedTab"
        active-color="primary"
        indicator-color="primary"
        class="text-primary"
        dense
        align="left"
        shrink
      >
        <q-tab name="self" label="My Debit Cards" />
        <q-tab name="all" label="All Company Cards" />
      </q-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import CardBalance from './card-balance'

const selectedTab = ref('my-cards')

const emit = defineEmits(['update:tab'])

watch(selectedTab, (newTab) => {
  emit('update:tab', newTab)
})
</script>

<style scoped>
.cards-header {
  width: 100%;
}

.header-top {
  width: 100%;
}

.header-tabs {
  width: 100%;
}
</style>
