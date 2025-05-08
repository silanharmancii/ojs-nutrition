import { NavMenu } from "@/components/NavbarSection/Navbar";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
    <NavMenu></NavMenu>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}