"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import getNZF from "../web3/web3";

interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  account: string;
  shortenAccount: string;
  NZFBalance: string;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState<string>("");
  const [shortenAccount, setShortenAccount] = useState<string>("");
  const [NZFBalance, setNZFBalance] = useState<string>("0");

  const fetchNZFBalance = async (account: string) => {
    try {
      const balance = await getNZF(account);
      setNZFBalance(balance);
      console.log(NZFBalance);
    } catch (error) {
      console.error("Error fetching NZF balance:", error);
    }
  };

  const login = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected with account:", accounts[0]);
        setAccount(accounts[0]);
        shortenWalletAddress(accounts[0]);
        setIsLoggedIn(true);

        fetchNZFBalance(accounts[0]);
      } else {
        console.error("Metamask is not installed.");
      }
    } catch (error) {
      console.error("Error connecting with Metamask:", error);
    }
  };

  function shortenWalletAddress(account: string) {
    if (!account || account.length < 8) {
      return account; // 주소가 유효하지 않거나 충분한 길이가 아닌 경우 그대로 반환
    }

    const prefix = account.substring(0, 4);
    const suffix = account.substring(account.length - 4);

    setShortenAccount(prefix + "..." + suffix);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, account, shortenAccount, NZFBalance }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
