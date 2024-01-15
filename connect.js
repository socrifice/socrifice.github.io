const solanaWeb3 = require('@solana/web3.js');
const splToken = require('@solana/spl-token');
const bs58 = require('bs58');

async function main() {

    const privateKeyBase58 = process.env.PRIVATE_KEY;

    // Pastikan PRIVATE_KEY adalah string
    if (typeof privateKeyBase58 !== 'string') {
        console.error('Private key is not a string');
        return;
    }

    const privateKeyBytes = bs58.decode(privateKeyBase58);

    const connection = new solanaWeb3.Connection("https://solana-mainnet.core.chainstack.com/2517a9aa025865d20dcc7c47c06271c8", {wsEndpoint:"wss://solana-mainnet.core.chainstack.com/ws/2517a9aa025865d20dcc7c47c06271c8"});

    const walletKeyPair = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(bs58.decode(process.env.PRIVATE_KEY)));

    let balance = await connection.getBalance(walletKeypair.publicKey);
    console.log(balance / solanaWeb3.LAMPORTS_PER_SOL);
}

main ()