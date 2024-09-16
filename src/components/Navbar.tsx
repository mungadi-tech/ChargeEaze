import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import logo from "../assets/logo_main.png";

export function NavBarSection() {
  return (
    <Navbar disableAnimation isBordered height={"5rem"}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <img src={logo} alt="" className="h-14" />
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden">
        <NavbarItem>
          <img src={logo} alt="" className="h-14" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-8">
        <NavbarItem>
          <Link to={"/"}>
            <Button variant="ghost" size={"4"}>
              Home
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/about"}>
            <Button variant="ghost" size={"4"}>
              About Us
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/contact"}>
            <Button variant="ghost" size={"4"}>
              Contact Us
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link to={"/appdownload"}>
            <Button
              size="4"
              radius="full"
              className="inline-flex bg-gradient-to-r from-purple-500 to-emerald-500 px-4 py-2 text-white hover:from-purple-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="hidden md:block">App Downloads</span>
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Link to={"/"}>
            <Button variant="ghost" size={"4"}>
              Home
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/about"}>
            <Button variant="ghost" size={"4"}>
              About Us
            </Button>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link to={"/contact"}>
            <Button variant="ghost" size={"4"}>
              Contact Us
            </Button>
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
