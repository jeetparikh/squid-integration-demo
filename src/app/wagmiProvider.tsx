'use client';

import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';

// 필수 설정만 포함한 config
const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export function WagmiProviderWrapper({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
} 