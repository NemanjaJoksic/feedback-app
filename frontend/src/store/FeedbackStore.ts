import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Feedback } from '../model/Feedback'

type FeedbackStore = {
  isLoading: boolean
  feedbacks: Feedback[]
  feedback: Feedback
  actions: {
    getAll: () => Promise<void>
    create: (feedback: Feedback) => Promise<void>
    update: (feedback: Feedback) => Promise<void>
    delete: (id: number) => Promise<void>
    load: (feedback: Feedback) => void
  }
}

export const useFeedbackStore = create(
  immer<FeedbackStore>((set, get) => ({
    isLoading: false,
    feedbacks: [],
    feedback: {} as Feedback,
    actions: {
      getAll: async () => {
        set((store) => {
          store.isLoading = true
          store.feedbacks = []
        })

        const response = await fetch('/api/feedbacks')
        const feedbacks = (await response.json()) as Feedback[]

        set((store) => {
          store.isLoading = false
          store.feedbacks = feedbacks
        })
      },

      create: async (feedback: Feedback) => {
        await fetch('/api/feedbacks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(feedback),
        })

        get().actions.getAll()
      },

      update: async (feedback: Feedback) => {
        await fetch('/api/feedbacks/' + feedback.id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(feedback),
        })

        get().actions.getAll()
      },

      delete: async (id: number) => {
        await fetch('/api/feedbacks/' + id, {
          method: 'DELETE',
        })

        get().actions.getAll()
      },

      load: (feedback: Feedback) => {
        set((store) => void (store.feedback = feedback))
      },
    },
  }))
)
