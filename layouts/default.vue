<template>
  <div class="wrapper">
    <article>
      <slot></slot>
    </article> 
    <aside>
      <header> <nuxt-link to="/inbox"> <img src="/images/logo.png" class="logo" alt="logo"/> </nuxt-link></header>
      <div class="sidebar">
        <nav>
          <nuxt-link to="/inbox">
            <span class="d-flex align-items-center">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9H4.88197C5.56717 9 6.19357 9.38713 6.5 10C6.80643 10.6129 7.43283 11 8.11803 11H13.882C14.5672 11 15.1936 10.6129 15.5 10C15.8064 9.38713 16.4328 9 17.118 9H20.5M7.96656 1H14.0334C15.1103 1 15.6487 1 16.1241 1.16396C16.5445 1.30896 16.9274 1.5456 17.2451 1.85675C17.6043 2.2086 17.8451 2.6902 18.3267 3.65337L20.4932 7.9865C20.6822 8.36449 20.7767 8.55348 20.8434 8.75155C20.9026 8.92745 20.9453 9.10847 20.971 9.29226C21 9.49923 21 9.71053 21 10.1331V12.2C21 13.8802 21 14.7202 20.673 15.362C20.3854 15.9265 19.9265 16.3854 19.362 16.673C18.7202 17 17.8802 17 16.2 17H5.8C4.11984 17 3.27976 17 2.63803 16.673C2.07354 16.3854 1.6146 15.9265 1.32698 15.362C1 14.7202 1 13.8802 1 12.2V10.1331C1 9.71053 1 9.49923 1.02897 9.29226C1.05471 9.10847 1.09744 8.92745 1.15662 8.75155C1.22326 8.55348 1.31776 8.36448 1.50675 7.9865L3.67331 3.65337C4.1549 2.69019 4.3957 2.2086 4.75495 1.85675C5.07263 1.5456 5.45551 1.30896 5.87589 1.16396C6.35125 1 6.88969 1 7.96656 1Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Inbox
            </span>
            <span>{{ inbox.mails.length }}</span>
          </nuxt-link>
          <nuxt-link to="/archive">
            <span class="d-flex align-items-center">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5.9966C2.83599 5.99236 2.7169 5.98287 2.60982 5.96157C1.81644 5.80376 1.19624 5.18356 1.03843 4.39018C1 4.19698 1 3.96466 1 3.5C1 3.03534 1 2.80302 1.03843 2.60982C1.19624 1.81644 1.81644 1.19624 2.60982 1.03843C2.80302 1 3.03534 1 3.5 1H18.5C18.9647 1 19.197 1 19.3902 1.03843C20.1836 1.19624 20.8038 1.81644 20.9616 2.60982C21 2.80302 21 3.03534 21 3.5C21 3.96466 21 4.19698 20.9616 4.39018C20.8038 5.18356 20.1836 5.80376 19.3902 5.96157C19.2831 5.98287 19.164 5.99236 19 5.9966M9 11H13M3 6H19V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H7.8C6.11984 19 5.27976 19 4.63803 18.673C4.07354 18.3854 3.6146 17.9265 3.32698 17.362C3 16.7202 3 15.8802 3 14.2V6Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              Archive
            </span>
            <span>{{ archive.mails.length }}</span>
          </nuxt-link>
        </nav>
        <button class="btn d-flex"><img src="/images/log-out.svg" alt="logout"/> Logout</button>
      </div>
    </aside>
  </div>
</template>
<script setup>
import { useInboxStore } from '@/stores/inbox'
import { useArchiveStore } from '../stores/archive';

const inbox = useInboxStore();
const archive = useArchiveStore();
</script>
<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 260px auto;
    grid-template-areas: 
      "sidebar content";
      height: 100vh;

    article {
      grid-area: content;
      background-color: #fff;
      padding: 24px;
      padding-left: 0;
    }
    aside {
      grid-area: sidebar;
      background-color: #f8fafc;
      border-right: 1px solid #E5E7EB;
      padding: 20px;
      // width: 260px;
      .sidebar{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
        height: calc(100vh - 100px);
      }
      .logo{
        width: 40px;
        height: 20px;
        margin-bottom: 32px;
        margin-left: 4px;
      }
      nav{
        display: flex;
        flex-flow: column;
        width:100%;
        a{
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          border-radius: 54px;
          text-decoration: none;
          font-weight: bold;
          color:#4B5563;
          padding: 12px 24px;
          margin-bottom: 12px;
          transition: background-color 0.2s;
          svg {
            margin-right: 12px;
            stroke: #4B5563;
          }
          &.router-link-active{
            background-color: #D6E2FB;
            color:#121829;
            svg path {
              stroke:#121829;
            }
          }
        }
      }
    }
    .btn {
      border: none;
      color: #4B5563;
      font-size: 16px;
      font-weight: 500;
      background-color: unset;
      cursor: pointer;
      img {
        margin-right: 12px;
      }

    }
  }

</style>