import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import * as authApi from '../api/auth.js'

const emptySession = { owner: false, cvAccess: null, canManageLinks: false }

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(emptySession)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    const data = await authApi.fetchSession()
    setSession({
      owner: data.owner ?? false,
      cvAccess: data.cvAccess ?? null,
      canManageLinks: data.canManageLinks ?? false,
    })
    setLoading(false)
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const login = useCallback(
    async (username, password) => {
      await authApi.login(username, password)
      await refresh()
    },
    [refresh]
  )

  const logout = useCallback(async () => {
    await authApi.logout()
    setSession(emptySession)
  }, [])

  const hasCvAccess = session.owner || Boolean(session.cvAccess?.valid)

  const value = useMemo(
    () => ({
      ...session,
      loading,
      hasCvAccess,
      login,
      logout,
      refresh,
    }),
    [session, loading, hasCvAccess, login, logout, refresh]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
