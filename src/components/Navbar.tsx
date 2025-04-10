import React from "react"; // Import React
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem, // Use NavbarMenuItem for menu items
  NavbarMenuToggle,
  Link as NextUILink, // Alias NextUI Link to avoid conflict
  Button as NextUIButton, // Alias NextUI Button
} from "@nextui-org/react";
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import React Router Link and useLocation
import logo from "../assets/logo_main.png";

export function NavBarSection() {
  // Define navigation links in one place
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // State for mobile menu toggle (NextUI handles this internally, but useful for closing on nav)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Get current location to highlight active link
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar
      isBordered
      height="5rem" // Or use Tailwind h-20 for consistency if preferred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen} // Control menu state
      maxWidth="xl" // Optional: constrain navbar width
      className="bg-background/80 backdrop-blur-sm" // Optional: Add subtle background/blur
    >
      {/* Left side: Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Center (Mobile) / Left (Desktop): Brand Logo */}
      {/* Using justify="start" on desktop to align brand left */}
      <NavbarContent className="sm:flex" justify="start">
        <NavbarBrand>
          <RouterLink to="/">
            {" "}
            {/* Make logo clickable */}
            <img
              src={logo}
              alt="Charge Ease Logo" // Descriptive alt text
              className="h-12 md:h-14" // Slightly adjust height if needed
            />
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Center (Desktop): Navigation Links */}
      <NavbarContent className="hidden sm:flex gap-6 lg:gap-8" justify="center">
        {navLinks.map((item) => (
          <NavbarItem key={item.path} isActive={currentPath === item.path}>
            <NextUILink
              as={RouterLink} // Use React Router Link for navigation
              to={item.path}
              color={currentPath === item.path ? "primary" : "foreground"} // Use theme colors
              aria-current={currentPath === item.path ? "page" : undefined}
              className="text-lg font-medium transition-colors hover:text-primary" // Consistent styling
            >
              {item.name}
            </NextUILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side: Call to Action Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <NextUIButton
            as={RouterLink} // Use React Router Link
            to="/appdownload"
            radius="full"
            color="primary" // Use NextUI color prop
            variant="solid" // Or 'shadow', 'flat' etc.
            className="font-semibold text-white bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2" // Keep gradient if desired, NextUI Button handles focus rings well too
            size="lg" // Consistent sizing (sm, md, lg)
          >
            {/* Using responsive text instead of hiding/showing */}
            Download
          </NextUIButton>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/95 pt-4">
        {navLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <NextUILink
              as={RouterLink}
              to={item.path}
              color={currentPath === item.path ? "primary" : "foreground"}
              className="w-full text-xl" // Larger text for mobile menu
              size="lg"
              onClick={() => setIsMenuOpen(false)} // Close menu on navigation
              aria-current={currentPath === item.path ? "page" : undefined}
            >
              {item.name}
            </NextUILink>
          </NavbarMenuItem>
        ))}
        {/* Optional: Add CTA button to mobile menu as well */}
        <NavbarMenuItem>
          <NextUIButton
            as={RouterLink}
            to="/appdownload"
            radius="full"
            color="primary"
            variant="flat" // Maybe flat variant looks better in menu
            className="w-full font-semibold mt-4"
            size="lg"
            onClick={() => setIsMenuOpen(false)}
          >
            App Downloads
          </NextUIButton>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
