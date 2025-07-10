import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '../user'
import axios from 'axios'

vi.mock('axios')

describe('user store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('login berhasil jika username dan password benar', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, username: 'admin', password: 'admin123', role: 'admin' }] })
    const store = useUserStore()
    await store.login('admin', 'admin123')
    expect(store.isLoggedIn).toBe(true)
    expect(store.user.username).toBe('admin')
    expect(store.error).toBeNull()
  })

  it('login gagal jika username/password salah', async () => {
    axios.get.mockResolvedValue({ data: [] })
    const store = useUserStore()
    await store.login('salah', 'salah')
    expect(store.isLoggedIn).toBe(false)
    expect(store.user).toBeNull()
    expect(store.error).toBe('Username atau password salah.')
  })

  it('logout menghapus user dan status login', () => {
    const store = useUserStore()
    store.user = { username: 'admin' }
    store.isLoggedIn = true
    store.logout()
    expect(store.user).toBeNull()
    expect(store.isLoggedIn).toBe(false)
  })
})
