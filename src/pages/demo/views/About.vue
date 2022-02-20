<template>
  <div class="about">
    <h1>About</h1>
    <el-input-number
      :model-value="count"
      placeholder="请输入"
      @change="setCount"
    />
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../pinia/modules/counter';

const { count } = storeToRefs(useCounterStore());
const { setCount } = useCounterStore();
</script>
