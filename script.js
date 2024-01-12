document.getElementById('connectBtn').addEventListener('click', async function() {
    try {
        // Connect to the Solana wallet
        const connection = new web3.Connection(web3.clusterApiUrl('https://devnet.helius-rpc.com/?api-key=292cdc81-9300-44bc-89f7-b8dc830da957'), 'confirmed');
        const provider = await web3.connect();
        const wallet = new web3.Wallet(provider);

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
