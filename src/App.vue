<script setup>
import MuscleGroupSelector from './components/MuscleGroupSelector.vue';
</script>

<template>
  <div>
    <muscle-group-selector
      :translations="muscularGroupTranslations"
      @on-select="() => {}"
    />
  </div>
</template>
