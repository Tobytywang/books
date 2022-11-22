<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>

  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div> -->
  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
} */
</style>

<script setup lang="ts">
import { reactive, ref, onUpdated, onMounted } from 'vue'
import router from '../router';

defineProps<{ msg: string }>();
let msg = ref<string>('HelloW');
onMounted (() => {
  changeMsg();
  console.log('onMounted');
})
onUpdated (() => {
  changeMsg();
  console.log('onUpdated');
})
const changeMsg=()=>{
  msg.value = router.currentRoute.value.path;
  console.log(msg);
}
</script>
  