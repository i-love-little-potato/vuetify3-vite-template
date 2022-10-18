<template lang="pug">
v-card
  v-btn(:to="{path: 'aimer'}") aimer
  v-btn(:to="{path: 'potato'}") potato
  v-btn(@click="name = common.name") 从pinina获取名字
  v-sheet {{name}}
</template>

<script setup>

import {commonStore} from '@/store/common.js'

const name = ref('无名字')
const common = commonStore()

</script>

<style lang="stylus" scoped>

</style>
