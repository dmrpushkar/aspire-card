<template>
  <q-card flat class="q-pa-md">
    <q-card-section>
      <q-item-label class="text-bold text-subtitle2">Card Actions</q-item-label>
    </q-card-section>

    <q-card-section>
      <q-gutter>
        <q-row class="q-col-gutter-md" align="center">
          <q-col
            v-for="action in actions"
            :key="action.label"
            cols="4"
            sm="2"
            class="flex flex-center"
          >
            <CardActionButton :icon="action.icon" :label="action.label" :onClick="action.onClick" />
          </q-col>
        </q-row>
      </q-gutter>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import CardActionButton from './CardActionButton.vue'
import freezeIcon from 'assets/freeze-icon.svg'
import limitIcon from 'assets/spend-limit-icon.svg'
import gpayIcon from 'assets/gpay-icon.svg'
import replaceIcon from 'assets/replace-icon.svg'
import cancelIcon from 'assets/delete-icon.svg'

const actions = [
  { icon: freezeIcon, label: 'Freeze Card', onClick: () => console.log('Freeze Card') },
  { icon: limitIcon, label: 'Set Spend Limit', onClick: () => console.log('Set Spend Limit') },
  { icon: gpayIcon, label: 'Add to GPay', onClick: () => console.log('Add to GPay') },
  { icon: replaceIcon, label: 'Replace Card', onClick: () => console.log('Replace Card') },
  { icon: cancelIcon, label: 'Cancel Card', onClick: () => console.log('Cancel Card') },
]
</script>
