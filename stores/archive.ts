import { defineStore } from 'pinia'

export const useArchiveStore = defineStore('archive', {
  state: () => ({
    mails: [
      {
        id: 8,
        title: '[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file',
        content: 'Lorem ipsum dolor sit amet',
        readed: false
      },
      {
        id: 5,
        title: 'Wave hello with video, reactions and more now in huddles',
        content: 'Lorem ipsum dolor sit amet',
        readed: false
      },
      {
        id: 6,
        title: 'Wave hello with video, reactions and more now in huddles',
        content: 'Lorem ipsum dolor sit amet',
        readed: false
      },
    ]
  }),
})