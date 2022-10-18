import { defineStore } from 'pinia'

export const commonStore = defineStore('common', {
    state: () => {
        return {
            name: "aimer"
        }
    },
    action: {
        get_name() {
            return this.name
        },
    },
})
