import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";
import { AppContextProvider } from "@/contexts/AppContext";
import { SessionProvider } from "next-auth/react"

const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
        chain: mainnet,
        transport: http(),
    }),
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig config={config}>
            <SessionProvider session={pageProps.session}>
                <AppContextProvider>
                    <Component {...pageProps} />
                </AppContextProvider>
            </SessionProvider>
        </WagmiConfig>
    );
}
