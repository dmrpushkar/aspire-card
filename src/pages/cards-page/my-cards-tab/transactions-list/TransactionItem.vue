<template>
  <q-item clickable class="q-pa-sm">
    <q-item-section avatar>
      <q-avatar rounded size="40px">
        <img :src="icon" alt="transaction icon" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle2">{{ title }}</q-item-label>
      <q-item-label caption>{{ subtitle }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <div :class="amountClass">{{ amount }}</div>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  icon: string
  title: string
  subtitle: string
  amount: string
  isCredit?: boolean
}

const props = defineProps<Props>()

const amountClass = computed(() =>
  props.isCredit ? 'text-positive text-bold' : 'text-negative text-bold'
)
</script>
