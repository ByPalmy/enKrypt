import icon from "./icons/op.svg";
import { CoingeckoPlatform, NetworkNames } from "@enkryptcom/types";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";
import { EtherscanActivity } from "../libs/activity-handlers";
import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";
import assetsInfoHandler from "@/providers/ethereum/libs/assets-handlers/assetinfo-mew";
import shNFTHandler from "@/libs/nft-handlers/simplehash";

const opOptions: EvmNetworkOptions = {
  name: NetworkNames.Optimism,
  name_long: "Optimism",
  homePage: "https://www.optimism.io/",
  blockExplorerTX: "https://optimistic.etherscan.io/tx/[[txHash]]",
  blockExplorerAddr: "https://optimistic.etherscan.io/address/[[address]]",
  chainID: "0xa",
  isTestNetwork: false,
  currencyName: "ETH",
  currencyNameLong: "Ethereum",
  node: "wss://nodes.mewapi.io/ws/op",
  icon,
  coingeckoID: "ethereum",
  coingeckoPlatform: CoingeckoPlatform.Optimism,
  assetsInfoHandler,
  NFTHandler: shNFTHandler,
  activityHandler: wrapActivityHandler(EtherscanActivity),
};

const op = new EvmNetwork(opOptions);

export default op;
