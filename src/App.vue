<script setup>
import MuscleGroupSelector from './components/MuscleGroupSelector.vue';

const handleOnSelectMuscularGroup = (selection) => {
  console.log(selection); // array of selection e.g ['abs']
};
</script>

<template>
  <div style="max-width: 500px; margin: 50px auto; position: relative">
    <div class="row">
      <div class="col-12">
        <muscle-group-selector
          @on-select="handleOnSelectMuscularGroup"
          :showMusclesListHelper="true"
          :allowMultiple="true"
        />
      </div>
    </div>
  </div>
</template>
<style>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.col-12 {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-6 {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 50%;
}
</style>
