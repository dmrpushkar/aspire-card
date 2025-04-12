<template>
  <div class="q-px-md q-py-sm text-center card-balance">
    <div class="text-caption text-grey">Available Balance</div>
    <div class="text-h5 text-bold text-black">
      ₹ {{ balance }}
    </div>
  </div>
</template>

<script setup lang="ts">
const balance = '5,000.00'
</script>

<style scoped>
.card-balance {
  border: 1px dashed #ccc;
}
</style>
