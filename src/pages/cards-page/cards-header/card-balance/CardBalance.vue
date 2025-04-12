<template>
  <div class="card-balance">
    <div class="text-caption q-mb-sm">Available balance</div>
    <div class="balance-row">
      <div class="currency-badge">S$</div>
      <div class="balance-amount">{{ balance }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const balance = '3,000'
</script>

<style scoped>
.balance-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.currency-badge {
  background: var(--primary-color);
  color: white;
  width: 44px;
  height: 22px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.balance-amount {
  font-size: 24px;
  font-weight: 600;
  color: #222;
}

@media screen and (max-width: 768px) {
  .balance-amount {
    font-size: 24px;
    color: white;
  }

  .currency-badge {
    font-size: 10px;
    padding: 2px 6px;
  }
}
</style>
