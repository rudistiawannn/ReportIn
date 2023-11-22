const Faq = {
    async render() {
      return `
        <h2>faq TESSSS</h2>
      `;
    },
   
    async afterRender() {
        console.log("tes");
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
export default Faq;