"use client";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth, db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { SignUpForm } from "../types";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  type: "customer" | "provider";
  createdAt?: Date;
}

interface AuthContext {
  currentUser?: User;
  signup: (
    userType: "customer" | "provider",
    formData: SignUpForm
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  OAuthLogin: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("");
  }
  return context;
}

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);
  const memoUser = useMemo(() => {
    return user;
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(undefined);
        return;
      }
      const user = await fetchUser(currentUser.uid);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const fetchUser = async (uid: string) => {
    try {
      const usersRef = collection(db, "users");

      const q = query(usersRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        console.log("user", userDoc.data());
        return {
          id: userDoc.id,
          name: userDoc.data().name,
          email: userDoc.data().email,
          type: userDoc.data().type,
          ...userDoc.data(),
        };
      } else {
        return undefined;
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      return undefined;
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      //   setAuthLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();

      await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      router.push("/");
    } catch (error: any) {}
    // setAuthLoading(false);
  };

  const OAuthLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const token = await user.getIdToken();
        await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signup = async (
    userType: "customer" | "provider",
    formData: SignUpForm
  ): Promise<void> => {
    const { email, password } = formData;
    try {
      //   setAuthLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;
      const token = await userCredential.user.getIdToken();

      await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, userType, ...formData, token }),
      });

      router.push("/");
    } catch (error: any) {}
    // setAuthLoading(false);
  };

  const logout = async () => {
    await signOut(auth);
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/auth/signin");
  };
  return (
    <AuthContext.Provider
      value={{
        currentUser: memoUser,
        signup,
        login,
        logout,
        OAuthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
