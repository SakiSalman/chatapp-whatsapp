import { create } from 'zustand'

export const useGlobalStore = create((set) => ({
  loading: 0,
  setLoading: () => set((loading) => ({ loading: loading })),
}))