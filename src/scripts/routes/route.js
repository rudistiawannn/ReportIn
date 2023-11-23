import Faq from "../../views/pages/FAQ";
import Dashboard from "../../views/pages/dashboard";
import Kontak from "../../views/pages/kontak";
import Riwayat from "../../views/pages/riwayat";
import Home from "../../views/pages/home";
 
const routes = {
  '/': Home,
  '/dashboard': Dashboard,
  '/riwayat': Riwayat,
  '/kontak' : Kontak,
  '/faq' : Faq,

};
 
export default routes;