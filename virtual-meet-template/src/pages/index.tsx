import CardLink from "@/components/CardLink";
import { useAppContext } from "@/contexts/AppContext";
import { useAuth } from "@/hooks/useAuth";
import styles from "@/styles/Home.module.css";
import { useAccount } from "wagmi";

const ConnectWalletBtn = ({ onClick, text }: { onClick: () => void, text: string }) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

const OptionsGrid = () => {
    return (
        <div className={styles.grid}>
            <CardLink
                href="/balances"
                title="Token Balance"
                description="See the tokens you own in Chilliz Spicy Testnet"
            />
            <CardLink
                href="/meet"
                title="Meet"
                description="Discover Virtual Meetup for token holders"
            />
            <CardLink
                href="/fantokens"
                title="FanTokens"
                description="See every fan token"
            />
        </div>
    );
};

function Hub() {
    const { isConnected, address } = useAppContext();
    const { handleConnect, handleDisconnect } = useAuth();

    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div>
                    <h1 className="text-6xl font-semibold my-4 text-center">
                        Welcome to the Chilliz Hub
                    </h1>
                    <p className="text-2xl text-center">
                        {isConnected
                            ? `Your address is ${address}`
                            : "Please connect your wallet"}
                    </p>

                    <h2 className="text-4xl text-center">
                        <div className="my-8">
                            Only Fan Token Holders can vote on
                        </div>
                        <div className="mt-8">
                            exclusive events and join virtual meetups
                        </div>
                    </h2>
                </div>
            </div>
            {isConnected ? (
                <>
                    <OptionsGrid />
                    <ConnectWalletBtn text="Disconnect" onClick={handleDisconnect} />
                </> 
            ) : (
                <ConnectWalletBtn text="Connect Wallet" onClick={handleConnect} />
            )}
        </main>
    );
}
export default Hub;
