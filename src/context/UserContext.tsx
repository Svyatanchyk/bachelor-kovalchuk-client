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
import { useGetSubscription } from "../hooks/useGetSubscription";

export interface User {
  userId: string | null;
  email: string | null;
  tokenBalance: number | null;
  nickname: string | null;
  role?: string | null;
  provider: "google" | "local" | null;
  createdCreatives?: null | number;
}

export interface Subscription {
  id: string;
  subType: string;
  status: string;
  startDate: Date;
  endDate: Date;
}

interface UserContextType {
  user: User | null;
  subscription: Subscription | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUserData: (user: User) => void;
  resetSubscription: () => void;
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
  const [subscription, setSubscription] = useState<Subscription | null>(null);

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
    setUser(newUserData);
  };
  const resetUser = () => setUser(null);
  const resetSubscription = () => setSubscription(null);

  const { user: userData, isAuthenticated: isSignedIn, isPending } = useAuth();
  const { data: userSub, isPending: isSubscriptionPending } =
    useGetSubscription();

  useEffect(() => {
    if (!isSubscriptionPending) {
      if (userSub?.subscription) {
        setSubscription({
          id: userSub.subscription._id,
          subType: userSub.subscription.subType,
          endDate: userSub.subscription.endDate,
          startDate: userSub.subscription.startDate,
          status: userSub.subscription.status,
        });
      }
    }
  }, [userSub]);

  useEffect(() => {
    if (!isPending) {
      if (userData && isSignedIn) {
        setIsAuthenticated(isSignedIn);
        setUser({
          email: userData?.email,
          nickname: userData?.nickname,
          tokenBalance: userData?.tokenBalance,
          userId: userData?._id,
          provider: userData.provider,
        });
      }
    }
  }, [userData, isSignedIn]);

  const value = {
    user,
    subscription,
    setUserData,
    resetUser,
    isAuthenticated,
    isLoading: isPending,
    resetSubscription,
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
