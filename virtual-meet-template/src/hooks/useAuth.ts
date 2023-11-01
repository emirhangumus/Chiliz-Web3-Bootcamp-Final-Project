import { useAppContext } from "@/contexts/AppContext";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export function useAuth() {
    const { address, isConnected } = useAccount();
    const { setAddress, setIsConnected } = useAppContext();
    const { connect } = useConnect({
        connector: new InjectedConnector()
    });
    const { disconnect } = useDisconnect();

    const handleConnect = async () => {
        try {
            if (isConnected) {
                handleConnect();
            }
    
            connect();
            setAddress(address ?? "");
            setIsConnected(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDisconnect = async () => {
        try {
            if (!isConnected) {
                return;
            }
    
            disconnect();
            setAddress("");
            setIsConnected(false);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        address1: address,
        isConnected,
        handleConnect,
        handleDisconnect,
    };
}
