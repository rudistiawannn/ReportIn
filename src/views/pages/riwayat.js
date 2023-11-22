const Riwayat = {
    async render() {
      return `
        <h2>Riwayatttt TESSSS</h2>
      `;
    },
   
    async afterRender() {
        console.log("tes");
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
export default Riwayat;