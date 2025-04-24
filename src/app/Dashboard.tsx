'use client';

import dynamic from 'next/dynamic';

const SquidWidget = dynamic(
  () => import('@0xsquid/widget').then((mod) => mod.SquidWidget),
  { ssr: false }
);

export function Dashboard() {
  return <div>
    <SquidWidget
        config={{
        integratorId: "test-project-0b480f4e-1473-4ad4-9f08-2ff7511dcd72",
        apiUrl: "https://apiplus.squidrouter.com",
        defaultTokensPerChain: [
            {
            address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            chainId: "1",
            },
        ],
        initialAssets: {
            from: {
            address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            chainId: "1",
            },
            to: {
            address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            chainId: "42161",
            },
        },
        }}
    />
  </div>;
}