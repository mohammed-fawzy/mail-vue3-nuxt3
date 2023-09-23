<template>
  <div id="myModal" ref="modal" class="modal fade-in" :class="{'fade-out': addFadoutClass}" @keyup.esc="closingModal" tabindex="0">
    <div class="modal-wrapper" ref="modalWrapper">

      <div class="modal-header d-flex">
        <span class="close d-flex" @click="closingModal"><img src="/images/x-close.svg" alt="close">Close (Esc)</span>
        <div class="d-flex read-archive">
          <p class="d-flex cursor-pointer" v-if="!curentClickedMail.readed" @click="markAsRead"><img src="/images/mail-icon.svg" alt="mail"> Mark as read (r)</p>
          <p class="d-flex cursor-pointer" v-if="mailType == 'inbox'"  @click="archiveMail"><img src="/images/trash.svg" alt="archive"> Archive (a)</p>
        </div>
      </div>

      <div class="modal-content"> 
        <p class="modal-content__title">{{ curentClickedMail.title }}</p>
        <p class="modal-content__text">{{ curentClickedMail.content }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onClickOutside } from '@vueuse/core';
import { onKeyStroke } from '@vueuse/core'
import { useInboxStore } from '@/stores/inbox'
import { useArchiveStore } from '@/stores/archive'


const props = defineProps({
  curentClickedMail: Object,
  mailType: String
})
const emit = defineEmits(['close'])

let modal = ref(null)
onMounted(() => {
  modal.value.focus(); // focus the modal when mounted to get esc button work
})

let modalWrapper = ref(null)
onClickOutside(modalWrapper, () => closingModal())
    
let addFadoutClass = ref(false)
function closingModal() {
  addFadoutClass.value = true;
  setTimeout(() => {
    emit('close')
    addFadoutClass.value = false;
  }, 1000);
}

const inboxStore = useInboxStore();
const { mails } = storeToRefs(inboxStore);

const archiveStore = useArchiveStore();
const { archive } = storeToRefs(archiveStore);
onKeyStroke('r', (e) => markAsRead())
function markAsRead() {
   (props.mailType == 'inbox' ? inboxStore : archiveStore).mails.forEach(mail => {
      if (mail.id == props.curentClickedMail.id) {
        mail.readed = true
      }
    })
  closingModal();
}

onKeyStroke('a', (e) => archiveMail())
function archiveMail() {
  inboxStore.mails = inboxStore.mails.filter(mail => mail.id != props.curentClickedMail.id);
  archiveStore.mails.push(props.curentClickedMail);
  closingModal();
}

</script>

<style lang="scss">
  .modal {
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 

    &.fade-in {
      -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
      animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    &.fade-out {
      -webkit-animation: fade-out 1s ease-out both;
      animation: fade-out 1s ease-out both;
    }
  }
  .modal-wrapper {
    background-color: #fefefe;
    padding: 32px;
    border: 1px solid #888;
    width: 60%;
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
  }
  .modal-header {
    justify-content: space-between;
    .read-archive{
      align-items: center;
      p{
        white-space: nowrap;
        color: #4B5563;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        img {
          margin-right: 12px;
        }
        &:first-child{
          margin-right: 40px;
        }
      }
    }
  }
  .close {
    cursor: pointer;
    color: #4B5563;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    img {
      margin-right: 12px;
    }
  }
  .modal-content{
    margin-top: 33px;
    &__title{
      color: #121829;
      font-size: 20px;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
    }
    &__text{
      margin-top:20px;
      color: #4B5563;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
  }
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
 @-webkit-keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
</style>