import { http, createConfig } from "wagmi";
import { fallback } from "@wagmi/core";
import { mainnet, sepolia, mantle } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export type chainIds = 5000;

export const config = createConfig({
  chains: [mantle],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Create Wagmi" }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!! }),
  ],
  ssr: true,
  transports: {
    [mantle.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
