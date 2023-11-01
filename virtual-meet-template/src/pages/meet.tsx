import BackToHub from "@/components/BackToHub";
import React from "react";
import styles from "@/styles/Home.module.css";
import Countdown from "react-countdown";
import { useBalances } from "@/hooks/useBalances";
import { formatBalance } from "@/util/formatBalance";
import type { TokenBalance } from "@/types/TokenBalance";

function MeetingPage() {

    const { nativeBalance, message, tokenBalances } = useBalances();

    const getBySymbol = (symbol: string): TokenBalance | undefined => {
        return tokenBalances.find((token) => token.symbol === symbol);
    }

    const native = formatBalance((nativeBalance && Number(nativeBalance.balance) > 0 ? nativeBalance.balance : 0).toString());
    
    const selectedToken = getBySymbol("SAM");
    const isEligible = selectedToken && nativeBalance && Number(formatBalance(nativeBalance.balance)) > 1;
    const countdownDate = new Date("2023-12-31T23:59:59");

    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div>
                    <h1 className="my-8 text-center text-3xl font-bold  ">
                        MEETING WILL START SOON!
                    </h1>

                    <Countdown
                        date={countdownDate}
                        className={styles.countdown}
                    />

                    <h2 className="my-8 text-center text-xl font-bold">
                        <div className="my-4">
                            only native token holders will be eligible to join
                        </div>
                        <div className="my-4">{`Your native balance is ${native}`}</div>
                        <div className="my-4 ">
                            {`YOU ARE ${isEligible ? "" : "NOT"} ELIGIBLE`}
                        </div>
                    </h2>

                    <BackToHub />
                </div>
            </div>
        </main>
    );
}

export default MeetingPage;
