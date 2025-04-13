<template>
  <div class="card-actions">
    <CardActionButton
      v-for="action in actions"
      :key="action.id"
      :icon="action.icon"
      :label="action.label"
      :alt="action.alt"
      @click="handleActionClick(action.id)"
    />
  </div>
</template>

<script setup lang="ts">
import CardActionButton from './CardActionButton.vue';
import freezeIcon from 'assets/freeze-icon.svg';
import limitIcon from 'assets/spend-limit-icon.svg';
import gpayIcon from 'assets/gpay-icon.svg';
import cancelIcon from 'assets/delete-icon.svg';
import replaceIcon from 'assets/replace-icon.svg';
import { CardService } from '../../../../services/cardServices';
import { useCardsStore } from 'stores/cards';
import { Dialog, Loading } from 'quasar';
import { computed } from 'vue';

const props = defineProps<{
  cardId: string
}>();

const cardsStore = useCardsStore();
const cardService = new CardService(cardsStore);

const card = computed(() => cardsStore.getCardById(props.cardId));

const actions = computed(() => [
  {
    id: 'freeze',
    icon: freezeIcon,
    label: card.value?.frozen ? 'Unfreeze card' : 'Freeze card',
    alt: 'Freeze card icon',
  },
  {
    id: 'limit',
    icon: limitIcon,
    label: 'Set spend limit',
    alt: 'Set spend limit icon',
  },
  {
    id: 'gpay',
    icon: gpayIcon,
    label: 'Add to GPay',
    alt: 'Add to GPay icon',
  },
  {
    id: 'replace',
    icon: replaceIcon,
    label: 'Replace card',
    alt: 'Replace card icon',
  },
  {
    id: 'cancel',
    icon: cancelIcon,
    label: 'Cancel card',
    alt: 'Cancel card icon',
  },
]);

const handleActionClick = (actionId: string) => {
  const currentCard = card.value;
  switch (actionId) {
    case 'freeze':
      Dialog.create({
        title: currentCard?.frozen ? 'Unfreeze Card' : 'Freeze Card',
        message: currentCard?.frozen
          ? 'Are you sure you want to unfreeze this card?'
          : 'Are you sure you want to freeze this card?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        void (async () => {
        try {
          Loading.show({
            message: currentCard?.frozen ? 'Unfreezing card...' : 'Freezing card...',
            spinnerColor: 'primary'
          });
          await cardService.setCardFreeze(props.cardId, !currentCard?.frozen);
        } finally {
          Loading.hide();
        }
        })();
      });
      break;
    case 'limit':
      console.log('Set spend limit action');
      break;
    case 'gpay':
      console.log('Add to GPay action');
      break;
    case 'replace':
      console.log('Replace card action');
      break;
    case 'cancel':
      console.log('Cancel card action');
      break;
    default:
      console.log('Unknown action');
  }
};
</script>

<style lang="scss" scoped>
.card-actions {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  padding: 24px;
  background-color: var(--secondary-background-color);
  border-radius: 12px;
  margin: 16px;
  min-width: 0;

  @media (max-width: $mobile-breakpoint) {
    gap: 12px;
    padding: 16px;
    margin: 0;
    border-radius: 24px 24px 0 0;
  }
}
</style>
