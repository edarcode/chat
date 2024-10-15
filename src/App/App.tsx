import { Outlet } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import { useInitApp } from "./useInitApp";

export default function App() {
  const { loading } = useInitApp();

  if (loading) return null;
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
