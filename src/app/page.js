import HreoSections from "../components/hreosection/HreoSections";
import AboutPage from "./about/page";
import WorkersPage from "./workers/pages";

 import { supabase } from "../lib/supabase";

export default function Home() {
  return (
    <>
  <HreoSections />
  <AboutPage />
  <WorkersPage />  
    </>
  );
}
