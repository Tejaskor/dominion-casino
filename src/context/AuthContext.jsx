import { createContext, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage.js';

// NOTE: Demo-only auth. Stores users + plaintext passwords in localStorage.
// Replace with a real backend + hashed credentials before production use.

const USERS_KEY = 'suprex:users';
const CURRENT_USER_KEY = 'suprex:currentUser';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [users, setUsers] = useLocalStorage(USERS_KEY, []);
  const [currentUser, setCurrentUser] = useLocalStorage(CURRENT_USER_KEY, null);

  const register = useCallback(
    ({ email, username, password }) => {
      const normalizedEmail = email.trim().toLowerCase();
      const normalizedUsername = username.trim();

      if (users.some((u) => u.email.toLowerCase() === normalizedEmail)) {
        return { ok: false, error: 'An account with this email already exists.' };
      }
      if (users.some((u) => u.username.toLowerCase() === normalizedUsername.toLowerCase())) {
        return { ok: false, error: 'That username is already taken.' };
      }

      const newUser = { email: normalizedEmail, username: normalizedUsername, password };
      setUsers([...users, newUser]);
      setCurrentUser({ email: newUser.email, username: newUser.username });
      return { ok: true };
    },
    [users, setUsers, setCurrentUser],
  );

  const login = useCallback(
    ({ identifier, password }) => {
      const id = identifier.trim().toLowerCase();
      const user = users.find(
        (u) => u.email.toLowerCase() === id || u.username.toLowerCase() === id,
      );
      if (!user) return { ok: false, error: 'No account found for that email or username.' };
      if (user.password !== password) return { ok: false, error: 'Incorrect password.' };

      setCurrentUser({ email: user.email, username: user.username });
      return { ok: true };
    },
    [users, setCurrentUser],
  );

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, [setCurrentUser]);

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      register,
      login,
      logout,
    }),
    [currentUser, register, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
