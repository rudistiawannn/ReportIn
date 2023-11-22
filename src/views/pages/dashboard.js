const Dashboard = {
    async render() {
      return `
        <h2>Dashboard TESSSS</h2>
      `;
    },
   
    async afterRender() {
        console.log("tes");
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
export default Dashboard;