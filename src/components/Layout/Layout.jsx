import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import PageLoader from "../Loaders/PageLoader";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
