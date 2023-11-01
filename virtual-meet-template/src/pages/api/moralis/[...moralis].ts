import { MoralisNextApi } from "@moralisweb3/next";

const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY;
const uri = process.env.NEXT_PUBLIC_AUTH_URL;

if (!apiKey || !uri) {
  throw new Error("Moralis API key not found");
}

export default MoralisNextApi({
  apiKey,
  authentication: {
    domain: "amazing.dapp",
    uri,
    timeout: 120,
  },
});