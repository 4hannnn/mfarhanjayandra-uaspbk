import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null
    }),
    actions: {
        async login(username, password) {
            this.loading = true
            this.error = null
            try {
                const res = await axios.get('http://localhost:3000/users', {
                    params: { username, password }
                })
                if (res.data.length > 0) {
                    this.user = res.data[0]
                    this.isLoggedIn = true
                } else {
                    this.error = 'Username atau password salah.'
                }
            } catch (e) {
                this.error = 'Gagal login. Coba lagi.'
            } finally {
                this.loading = false
            }
        },
        logout() {
            this.user = null
            this.isLoggedIn = false
        }
    }
})
