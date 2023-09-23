<template>
  <div>
    <p class="page-title">Archive</p>
    <div  class="form-group form-group--select-all">
      <input type="checkbox" id="all" v-model="isAllChecked">
      <label for="all"> Email Selected ({{ selected.length }})</label>
    </div>

    <div class="form-group" v-for="mail in mails" :class="mail.readed && 'readed'">
      <input type="checkbox" :name="mail.id" :value="mail.id" v-model="selected">
      <label @click="openModal(mail)"> {{ mail.title }}</label>
    </div>
  </div>
  <mailModal v-if="isModelOpened" @close="isModelOpened = false" :curentClickedMail="curentClickedMail" mailType="archive"/>

</template>

<script setup>
import { storeToRefs } from "pinia";
import { useArchiveStore } from '@/stores/archive'
import mailModal from '@/components/modal.vue'

const store = useArchiveStore()
const { mails } = storeToRefs(store);

let selected = ref([]);
let isAllChecked = computed ({
  get() {
    return selected.value.length == mails.value.length && mails.value.length != 0 ? true : false;
  },
  set(value) {
    let selectedMail = [];

    if (value) {
      mails.value.forEach(function (mail) {
        selectedMail.push(mail.id);
      });
    }
    selected.value = selectedMail;
  }
})

let isModelOpened = ref(false)
let curentClickedMail = ref({})
function openModal(mail) {
  isModelOpened.value = true;
  curentClickedMail.value = mail
}
</script>