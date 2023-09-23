import { defineStore } from 'pinia'

export const useInboxStore = defineStore('inbox', {
  state: () => ({
    mails: [
      {
        id: 1,
        title: 'Wave hello with video, reactions and more now in huddles',
        content: 'Lorem ipsum dolor sit amet',
        readed: false,
      },
      {
        id: 2,
        title: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
        content: 'Lorem ipsum dolor sit amet',
        readed: false,
      },
      {
        id: 3,
        title: 'Wave hello with video, reactions and more now in huddles',
        content: 'Lorem ipsum dolor sit amet',
        readed: false,
      },
      {
        id: 4,
        title: 'Wave hello with video, reactions and more now in huddles',
        content: 'Lorem ipsum dolor sit amet',
        readed: true,
      },
    ]
  }),
})