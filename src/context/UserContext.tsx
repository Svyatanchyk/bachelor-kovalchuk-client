import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useAuth } from "../hooks/useAuth";

export interface User {
  userId: string | null;
  email: string | null;
  tokenBalance: number | null;
  nickname: string | null;
  role?: string | null;
  provider: "google" | "local" | null;
  createdCreatives?: null | number;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  setUserData: (user: User) => void;
  resetUser: () => void;
  handleChangeUserBalance: (tokenBalance: number) => void;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
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
          userId: null,
          email: null,
          nickname: null,
          provider: null,
        };
      }
      return {
        ...prev,
        tokenBalance: newBalance,
      };
    });
  };

  const setUserData = (newUserData: User) => {
    console.log("SetUserData is called with: ", newUserData);

    setUser(newUserData);
  };
  const resetUser = () => setUser(null);

  const { user: userData, isAuthenticated: isSignedIn } = useAuth();

  useEffect(() => {
    setIsAuthenticated(isSignedIn);
    if (userData && isSignedIn) {
      setUser({
        email: userData?.email,
        nickname: userData?.nickname,
        tokenBalance: userData?.tokenBalance,
        userId: userData?._id,
        provider: userData.provider,
      });
    }
  }, [userData, isSignedIn]);

  const value = {
    user,
    setUserData,
    resetUser,
    isAuthenticated,
    handleChangeUserBalance,
    setIsAuthenticated,
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
