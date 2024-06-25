import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const RootLayout = () => {
  return (
    <main>
      <Header />
      <section className="py-10">
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;
