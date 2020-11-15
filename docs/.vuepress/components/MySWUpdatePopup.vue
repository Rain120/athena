<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
      v-if="enabled"
      class="my-sw-update-popup">
      {{ message }}<br>
      <button class="pulse" @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  position: fixed;
  right: 1em;
  bottom: 1em;
  padding: 1em;
  border: 1px solid #3eaf7c;
  border-radius: 3px;
  background: #fff;
  text-align: center;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(17, 255, 106, 0.2);
}

.my-sw-update-popup:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  border-color: #fefefe;
  transition: all .2s ease-in-out;
}

.my-sw-update-popup button {
  background-color: #4db6ac;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  margin: 12px 50px;
  padding: 13px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

button {
  background: none;
  border-radius: 40px;
  display: inline-block;
  cursor: pointer;
  border: 2px solid;
  font-size: 16px;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: #ef6eae;
  transition: 0.25s;
}

button:hover, button:focus { 
  border-color: #ef8f6e;
}

.pulse:hover, 
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em rgba(#fff,0);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 #ef8f6e; }
}

</style>
