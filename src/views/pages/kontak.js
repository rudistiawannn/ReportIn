const Kontak = {
    async render() {
      return `
        <h2>KontakK TESSSS</h2>
      `;
    },
   
    async afterRender() {
        console.log("tes");
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
export default Kontak;