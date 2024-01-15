// walletIntegration.js

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { getPhantomWallet, getSolflareWallet } from '@solana/wallet-adapter-wallets';

// Setup wallet adapters
const wallets = [
  getPhantomWallet(),
  getSolflareWallet(),
  // Add more wallets as needed
];

const network = WalletAdapterNetwork.Devnet; // Ganti dengan Mainnet jika diperlukan

// Setup wallet adapter
const wallet = new Wallet({
  wallets,
  network,
});

export default wallet;
