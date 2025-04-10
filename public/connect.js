document.addEventListener("DOMContentLoaded", function () {
  const connectBtn = document.getElementById("connectBtn");

  if (!window.solana || !window.solana.isPhantom) {
    alert("Phantom Wallet n'est pas détecté. Installe-le ici : https://phantom.app/");
    connectBtn.disabled = true;
    return;
  }

  connectBtn.addEventListener("click", async () => {
    try {
      const resp = await window.solana.connect();
      console.log("Connecté avec succès !");
      console.log("Adresse:", resp.publicKey.toString());
      alert("Wallet connecté : " + resp.publicKey.toString());
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
      alert("Connexion annulée ou erreur.");
    }
  });
});
