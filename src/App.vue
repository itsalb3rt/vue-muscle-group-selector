<script setup>
import MuscleGroupSelector from './components/MuscleGroupSelector.vue';

const handleOnSelectMuscularGroup = selection => {
  console.log(selection) // array of selection e.g ['abs']
}
</script>

<template>
  <div style="max-width: 500px; margin: 50px auto; position: relative;">
    <muscle-group-selector
      :translations="muscularGroupTranslations"
      @on-select="handleOnSelectMuscularGroup"
      :showMusclesListHelper="true"
      :allowMultiple="true"
    />
  </div>
</template>
