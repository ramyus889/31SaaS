"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import NavLogoSvg from "./NavLogoSvg";

import ThemeSwitcher from "../components/ThemeSwitcher";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Support", "Documentation"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLogoSvg />
          <p className="font-bold ps-3 pe-7">31SaaS</p>

          <NavbarItem>
            <Link
              color="foreground"
              className="pe-7 text-foreground/60 hover:text-foreground/80 max-[640px]:hidden"
              href="/Support"
            >
              Support
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/Documentation"
              className="pe-7 text-foreground/60 hover:text-foreground/80 max-[640px]:hidden"
            >
              Documentation
            </Link>
          </NavbarItem>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex  items-center">
            <ThemeSwitcher />
            <Button
              as={Link}
              href={"#"}
              radius="lg"
              className="dark:bg-slate-900"
            >
              Buy Now
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
