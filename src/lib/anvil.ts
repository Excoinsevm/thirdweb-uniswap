import { defineChain } from "thirdweb"

export default defineChain({
    id: 7171,
    name: "Bitrock",
    rpc: "http://connect.bit-rock.io",
    testnet: false,
    nativeCurrency: {
        name: "Bitrock",
        symbol: "BROCK",
        decimals: 18,
    },
});
