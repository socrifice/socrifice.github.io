document.getElementById('connectBtn').addEventListener('click', async function() {
    try {
        // Connect to the Solana wallet
        const connection = new solanaWeb3.Connection("https://solana-mainnet.core.chainstack.com/2517a9aa025865d20dcc7c47c06271c8", {wsEndpoint:"wss://solana-mainnet.core.chainstack.com/ws/2517a9aa025865d20dcc7c47c06271c8"});
        const provider = await solanaWeb3.connect();
        const wallet = new solanaWeb3.Wallet(provider);

        // Get the connected wallet address
        const publicKey = wallet.publicKey.toBase58();
        alert(`Connected with Solana wallet: ${publicKey}`);
    } catch (error) {
        console.error('Error connecting to Solana:', error);
        alert('Failed to connect to Solana wallet. Please check console for error details.');
    }
});

document.getElementById('sendSolanaBtn').addEventListener('click', function() {
    alert('Tombol Send Solana Coin diklik!');
    // Tambahkan aksi lain yang diinginkan saat tombol Send Solana Coin diklik
});
