<template>
  <div class="cards-tab">
    <div class="content-wrapper">
      <div class="left-section">
        <CardsCarousel
          :cards="cardsStore.getCards"
          @update:currentCardId="handleCurrentCardChange"
        />
        <CardActions :cardId="currentCardId"/>
      </div>

      <div class="right-section">
        <CardDetails :cardId="currentCardId"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsCarousel from './cards-carousel';
import CardActions from './card-actions';
import CardDetails from './card-additional-info';
import { ref } from 'vue';
import { useCardsStore } from 'stores/cards';

const cardsStore = useCardsStore();
const currentCardId = ref<string>(cardsStore.getCards[0]?.id ?? '');

const handleCurrentCardChange = (cardId: string) => {
  console.log('Card ID changed to:', cardId);
  currentCardId.value = cardId;
};
</script>

<style lang="scss" scoped>
.cards-tab {
  padding: 32px;

  @media (max-width: $mobile-breakpoint) {
    padding: 16px;
  }
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  gap: 32px;
  padding: 0 32px;

  @media (max-width: $mobile-breakpoint) {
    flex-direction: column;
    gap: 16px;
    padding: 0;
  }
}

.left-section {
  width: 414px;

  @media (max-width: $mobile-breakpoint) {
    width: 100%;
    background-color: #0C365A;
    padding: 24px 0 0;
  }
}

.right-section {
  flex: 1;
  max-width: 480px;
  margin-top: 22px;

  @media (max-width: $mobile-breakpoint) {
    margin-top: 0;
    padding: 16px;
  }
}

@media (max-width: $mobile-breakpoint) {
  .cards-tab {
    padding: 0;
  }

  .left-section {
    background-color: #0C365A;
    padding: 24px 0 0;
  }

  .row {
    margin: 0;
  }

  .left-column {
    padding: 0;
    background: var(--primary-background-color);
  }

  .right-column {
    padding: 16px;
  }
}
</style>
