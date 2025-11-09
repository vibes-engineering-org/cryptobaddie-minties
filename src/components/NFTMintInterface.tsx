"use client";

import { NFTMintFlow } from "~/components/nft-mint-flow";

// TODO: Replace with your actual NFT contract address
const CONTRACT_ADDRESS = "0x8F69c8eB92Ed068Aa577cE1847D568B39b0d9EBF" as const;
const NETWORK = "base" as const;
const TOKEN_ID = "1" as const;

export function NFTMintInterface() {
  return (
    <div className="space-y-6 text-center max-w-sm mx-auto">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight">
          Mint Your NFT
        </h1>
        <p className="text-muted-foreground">
          Connect your wallet and mint in just two clicks
        </p>
      </div>

      <NFTMintFlow
        contractAddress={CONTRACT_ADDRESS}
        tokenId={TOKEN_ID}
        network={NETWORK}
        buttonText="Mint NFT"
      />

      <div className="text-xs text-muted-foreground space-y-1">
        <p>Network: Base</p>
        <p>Contract: {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}</p>
      </div>
    </div>
  );
}