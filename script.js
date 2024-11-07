// Function to show QR code modal
function showQRCode(url) {
    const qrImage = document.getElementById('qrImage');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    document.getElementById('qrModal').style.display = 'flex';
  }

  // Function to close modal
  function closeModal() {
    document.getElementById('qrModal').style.display = 'none';
  }
  function openGoogleLens(imageUrl) {
    const lensUrl = `https://lens.google.com/search?p=0&url=${encodeURIComponent(imageUrl)}`;
    window.open(lensUrl, '_blank');
  }