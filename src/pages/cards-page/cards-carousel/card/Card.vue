<template>
  <q-card class="card-component">

    <!-- Card Image or Icon (Optional) -->
    <q-card-section class="flex flex-center q-pa-none q-pt-md">
      <q-avatar size="60px" color="primary" text-color="white">
        {{ card.title.charAt(0).toUpperCase() }}
      </q-avatar>
    </q-card-section>

    <!-- Card Content -->
    <q-card-section class="text-center">

      <div class="text-h6">{{ card.title }}</div>
      <div class="text-subtitle2 text-grey-6 q-mt-xs">{{ card.description }}</div>

    </q-card-section>

    <!-- Card Actions (Optional) -->
    <q-card-actions align="center">
      <q-btn flat label="View Details" color="primary" size="sm" />
      <q-btn flat label="More" color="secondary" size="sm" />
    </q-card-actions>

  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  card: {
    id: string
    title: string
    description: string
  }
}>()
</script>

<style scoped>
.card-component {
  max-width: 250px;
  margin: auto;
}
</style>
