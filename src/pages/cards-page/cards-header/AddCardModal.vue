<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => emit('update:modelValue', val)"
    persistent
  >
    <q-card class="new-card-modal">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Add New Card</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="emit('update:modelValue', false)" />
      </q-card-section>

      <q-card-section class="q-pt-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            v-model="newCard.cardholderName"
            label="Cardholder Name"
            :rules="[val => !!val || 'Name is required']"
          />
          <q-input
            v-model="newCard.cardNumber"
            label="Card Number"
            mask="#### #### #### ####"
            :rules="[val => !!val && val.replace(/\s/g, '').length === 16 || 'Valid card number required']"
          />
          <div class="row q-col-gutter-sm">
            <div class="col-6">
              <q-input
                v-model="newCard.expiryDate"
                label="Expiry Date"
                mask="##/##"
                :rules="[val => !!val && /^\d{2}\/\d{2}$/.test(val) || 'Valid date required']"
              />
            </div>
            <div class="col-6">
              <q-input
                v-model="newCard.cvv"
                label="CVV"
                type="password"
                mask="###"
                :rules="[val => !!val && val.length === 3 || 'Valid CVV required']"
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

defineProps<{
  modelValue: boolean
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const cardsStore = useCardsStore();

const newCard = ref({
  cardholderName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
});

const onSubmit = async () => {
  try {
    console.log(newCard.value);
    const card = {
      id: uuidv4(),
      cardholderName: newCard.value.cardholderName.trim(),
      cardNumber: newCard.value.cardNumber.trim().replace(/\s/g, ''),
      expiryDate: newCard.value.expiryDate.trim(),
      cvv: newCard.value.cvv.trim(),
      frozen: false,
      balance: 0,
      currency: 'SGD',
    };

    await new CardService(cardsStore).addCard(card);
    emit('update:modelValue', false);
    newCard.value = {
      cardholderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
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
