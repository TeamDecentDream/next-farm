import { useState, useEffect } from "react";

declare global {
  interface Window {
    ethereum: any;
  }
}

const ConnectWalletButton: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log("Connected with account:", accounts[0]);
          setIsConnected(true);
        } else {
          console.error("Metamask is not installed.");
        }
      } catch (error) {
        console.error("Error connecting with Metamask:", error);
      }
    };

    const button = document.querySelector(".connect-wallet-button");

    if (button) {
      button.addEventListener("click", connectWallet);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", connectWallet);
      }
    };
  }, []);

  return (
    <button className="rounded-lg absolute px-6 top-3 right-3 py-[15px] bg-[#DFE232] connect-wallet-button">
      {isConnected ? "Connected" : "Connect Wallet"}
    </button>
  );
};

export default ConnectWalletButton;
