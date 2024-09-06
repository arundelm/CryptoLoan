import {createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import {getDefaultConfig } from "connectkit";

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [sepolia, mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/diUdE-kcjcgdKqfuxZbzOGtUvO3jOhYS`),
      [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/diUdE-kcjcgdKqfuxZbzOGtUvO3jOhYS`),
    },

    // Required API Keys
    walletConnectProjectId: '3fbb6bba6f1de962d911bb5b5c9dba88',

    // Required App Info
    appName: "LoopDaWoop",
  }),
);