import { IconButton, Separator } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  Flink: string;
  Ilink: string;
  Tlink: string;
  Ficon: ReactNode;
  Ticon: ReactNode;
  Iicon: ReactNode;
}

export function Footer(links: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-purple-400 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Charge Eaze</h3>
            <p className="text-white">
              Simplifying Your Bills, Empowering Your Life
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { link: "/resources", title: "About Us" },
                { link: "/about", title: "FAQ" },
                { link: "/contact", title: "Contact Us" },
                { link: "/resources", title: "Services" },
                { link: "/career", title: "Terms of Use" },
                { link: "/contact", title: "Privacy Policy" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-white hover:text-white hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <p className="text-white">
              125, Isolo-Ijegun Road, Isheri-Oshun,
              <br />
              Lagos (ALMAROOF COMPOUND) Almaroof Bus Stop.
              <br />
              contact@chargeeaze.app
              <br />
              +234 (80) 328444178
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to={links.Flink} className="text-white hover:text-white">
                <IconButton radius="large">{links.Ficon}</IconButton>
              </Link>
              <Link to={links.Ilink} className="text-white hover:text-white">
                <IconButton radius="large">{links.Iicon}</IconButton>
              </Link>
              <Link to={links.Tlink} className="text-white hover:text-white">
                <IconButton radius="large">{links.Ticon}</IconButton>
              </Link>
            </div>
          </div>
        </div>
        <Separator size={"4"} mt={"6"} />
        <div className="pt-8 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Charge Eaze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
