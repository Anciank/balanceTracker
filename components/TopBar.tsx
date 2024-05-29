import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

const TopBar = () => {
  return (
    <Navbar>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopBar;
