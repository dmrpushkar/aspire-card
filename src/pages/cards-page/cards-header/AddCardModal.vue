<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="handleModelValueChange"
    persistent
  >
    <q-card class="new-card-modal">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Add New Card</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="emit('update:modelValue', false)" />
      </q-card-section>

      <q-card-section class="q-pt-md q-px-lg">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                v-model="cardholderName"
                label="Cardholder Name"
                :rules="[val => !!val || 'Name is required']"
              />
            </div>
          </div>
          <div class="row justify-end q-gutter-sm">
            <q-btn label="Cancel" flat @click="emit('update:modelValue', false)" />
            <q-btn
              class="add-card-btn"
              label="Add Card"
              type="submit"
              unelevated
              no-caps
              :loading="cardsStore.loading.addCard"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCardsStore } from 'stores/cards';
import { v4 as uuidv4 } from 'uuid';
import { CardService } from '../../../services/cardServices';

const generateCardNumber = () => {
  return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
};

const generateExpiryDate = () => {
  const today = new Date();
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String((today.getFullYear() + 3) % 100).padStart(2, '0');
  return `${month}/${year}`;
};

const generateCVV = () => {
  return String(Math.floor(Math.random() * 900) + 100);
};

defineProps<{
  modelValue: boolean
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const cardsStore = useCardsStore();

const cardholderName = ref('');

const cardService = new CardService(cardsStore);

const handleModelValueChange = (value: boolean) => {
  if (!value) {
    cardholderName.value = '';
  }
  emit('update:modelValue', value);
};

const onSubmit = async () => {
  try {
    const newCard = {
      id: uuidv4(),
      cardNumber: generateCardNumber(),
      cardholderName: cardholderName.value,
      expiryDate: generateExpiryDate(),
      cvv: generateCVV(),
      balance: 0,
      frozen: false,
      currency: 'USD',
    };
    await cardService.addCard(newCard);
    cardholderName.value = '';
    emit('update:modelValue', false);
  } catch (error) {
    console.error('Failed to add card:', error);
  }
};
</script>

<style scoped lang="scss">
.new-card-modal {
  min-width: 400px;
  padding: 8px;

  .text-h6 {
    color: var(--dark-blue-color);
    font-weight: 600;
  }

  :deep(.q-field) {
    .q-field__label {
      color: var(--gray-text-color);
      font-size: 12px;
    }

    .q-field__native {
      color: var(--dark-blue-color);
      font-weight: 500;
    }
  }

  @media (max-width: $mobile-breakpoint) {
    min-width: 300px;
  }

  :deep(.add-card-btn) {
    background: var(--dark-blue-color) !important;
    color: white !important;
    height: 36px !important;
    border-radius: 4px !important;
    font-weight: 600 !important;
  }

  :deep(.add-card-btn .q-btn__wrapper) {
    padding: 8px 24px;
    min-height: 36px;
  }
}
</style>
