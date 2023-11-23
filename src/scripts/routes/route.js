import Faq from "../../views/pages/FAQ";
import Dashboard from "../../views/pages/dashboard";
import Kontak from "../../views/pages/kontak";
import Riwayat from "../../views/pages/riwayat";
 
const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/riwayat': Riwayat,
  '/kontak' : Kontak,
  '/faq' : Faq,

};
 
export default routes;