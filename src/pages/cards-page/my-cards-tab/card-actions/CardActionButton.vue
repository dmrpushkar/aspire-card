<template>
  <div class="flex flex-col items-center q-mx-sm cursor-pointer">
    <QImg :src="icon" alt="action-icon" style="width: 40px; height: 40px;" />
    <div class="text-caption text-center q-mt-xs">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
}>()
</script>
