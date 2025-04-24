import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  userId: string;
  email: string;
  tokenBalance: number;
  nickname: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const setUserData = (newUserData: User) => {
    setUser(newUserData);
  };

  const resetUser = () => {
    setUser(null);
  };

  const value = {
    user,
    setUser: setUserData,
    resetUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
