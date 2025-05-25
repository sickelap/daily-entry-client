import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<any>(null);

export function UserProvider({ children }: any) {
  const [user, setUser] = useState(null);

  function login() {}
  function logout() {
    setUser(null);
  }

  function register() {}

  function initializeUser() {}

  useEffect(() => {
    initializeUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
