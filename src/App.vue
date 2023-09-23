<script setup>
import MuscleGroupSelector from './components/MuscleGroupSelector.vue';
import { ref } from 'vue';

const handleOnSelectMuscularGroup = (selection) => {
  console.log(selection); // array of selection e.g ['abs']
};

const isDark = ref(false);
const strokeColor = ref('#000');

const toggleDarkMode = () => {
  document.body.classList.toggle('dark');
  isDark.value = !isDark.value;
  strokeColor.value = isDark.value ? '#fff' : '#000';
};

const menuOptions = [
  'Basic',
  'Multiple selection',
  'Read only',
  'Show muscles list helper',
  'Initial values',
  'Custom colors',
];

const selectedMenuOption = ref('Basic');
const loading = ref(false);

const handleChangeSettings = (option) => {
  selectedMenuOption.value = option;
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 100);
};
</script>

<template>
  <div>
    <h1 style="text-align: center">Vue Muscle Group Selector</h1>
  </div>
  <div class="row">
    <div class="col-12" style="text-align: center">
      <nav v-for="option in menuOptions" :key="option">
        <span
          :class="selectedMenuOption === option ? 'selected' : null"
          @click="() => handleChangeSettings(option)"
          href="#"
          >{{ option }}</span
        >
      </nav>
    </div>
  </div>
  <div style="max-width: 500px; margin: 50px auto; position: relative">
    <div class="row">
      <div class="col-12">
        <button
          :style="`
            background: ${isDark ? '#000' : '#fff'}};
            color: ${isDark ? '#fff' : '#000'}}};
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 10px;
          `"
          @click="toggleDarkMode"
        >
          Toggle dark mode
        </button>
      </div>
      <div class="col-12" v-if="!loading">
        <muscle-group-selector
          @on-select="handleOnSelectMuscularGroup"
          :showMusclesListHelper="
            selectedMenuOption === 'Show muscles list helper' ? true : false
          "
          :allowMultiple="
            selectedMenuOption === 'Multiple selection' ? true : false
          "
          :initial-values="
            selectedMenuOption === 'Initial values' ||
            selectedMenuOption === 'Read only'
              ? ['pectorals']
              : []
          "
          :read-only="selectedMenuOption === 'Read only' ? true : false"
          :primaryColor="
            selectedMenuOption === 'Custom colors' ? 'tomato' : null
          "
          :stroke-color="strokeColor"
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
nav {
  display: inline;
}
nav span {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  background: #fff;
  color: #000;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}
nav span.selected {
  background: #000;
  color: #fff;
}

.dark {
  background: #000;
  color: #fff;
}
</style>
