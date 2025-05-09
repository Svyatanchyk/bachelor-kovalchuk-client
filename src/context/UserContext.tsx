import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useAuth } from "../hooks/useAuth";

interface User {
  userId: string;
  email: string;
  tokenBalance: number;
  nickname: string;
  role?: string;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  resetUser: () => void;
  handleChangeUserBalance: (tokenBalance: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleChangeUserBalance = (newBalance: number) => {
    setUser((prev) => {
      if (prev === null) {
        return {
          tokenBalance: newBalance,
          userId: "",
          email: "",
          nickname: "",
        };
      }
      return {
        ...prev,
        tokenBalance: newBalance,
      };
    });
  };
  const setUserData = (newUserData: User) => {
    setUser(newUserData);
  };

  const resetUser = () => {
    setUser(null);
  };

  const { user: userData, isAuthenticated: isSignedIn } = useAuth();

  const value = {
    user,
    setUser: setUserData,
    resetUser,
    isAuthenticated,
    handleChangeUserBalance,
  };

  useEffect(() => {
    setIsAuthenticated(isSignedIn);
    if (userData && isAuthenticated) {
      setUser({
        email: userData?.email,
        nickname: userData?.nickname,
        tokenBalance: userData?.tokenBalance,
        userId: userData?._id,
      });
    }
  }, [userData, isAuthenticated]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
