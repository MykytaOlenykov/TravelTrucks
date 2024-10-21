import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import PageLoader from "../Loaders/PageLoader";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader color="rgba(16, 24, 40, 1)" />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
