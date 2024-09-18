import { Heading, Text } from "@radix-ui/themes";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SwapTextCard } from "./animata/card/swap-text-card";
import { AppDownloadSection } from "./AppDown";

export function Body() {
  return (
    <>
      <main className="bg-white">
        {/* About Us Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Heading
              size={{ initial: "7", md: "9" }}
              className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              align={"center"}
            >
              About Charge Eaze
            </Heading>
            <div className="mx-auto max-w-3xl text-center text-lg text-gray-600">
              <Text align={"center"}>
                At Charge Ease, we understand that managing your finances can be
                overwhelming with numerous bills and payment deadlines. That's
                why we specialize in providing a seamless solution for all your
                electricity bills, mobile recharges, and various other payments.
                Our mission is to simplify your financial tasks, ensuring that
                you stay on top of your bills and never miss a payment. Our
                user-friendly platform is designed to make managing your
                payments as easy as possible.
                <br />
                With Charge Ease, you can conveniently handle all your
                transactions from one place, saving you time and effort. Whether
                it's paying your utility bills, recharging your mobile phone, or
                managing other regular payments, our system ensures that every
                transaction is processed swiftly and securely
              </Text>
            </div>
            <div className="mx-auto max-w-3xl text-center text-lg text-purple-500">
              <Link to={"/about"}>
                <Text align={"center"}>Read More...</Text>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Sectors Section */}
        <section>
          <div className="container mx-auto px-4">
            <Heading
              size={{ initial: "7", md: "9" }}
              className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              align={"center"}
            >
              Why Choose Us
            </Heading>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "24/7 Customer Support",
                  link: "",
                  final_text:
                    "Enjoy our Customer Service and have your issues resolved anytime- day and night.",

                  description:
                    "Enjoy our Customer Service and have your issues resolved anytime- day and night.",
                },
                {
                  title: "Payments",
                  link: "",
                  final_text:
                    "Simplifies end-to-end workflow for your business payout processes; freeing up resources for strategic business engagements",

                  description:
                    "Simplifies end-to-end workflow for your business payout processes;",
                },
                {
                  title: "Set Reminders",
                  link: "",
                  final_text:
                    "Let us remind you to Buy Electricity. Set a reminder date and we wont forget.",

                  description:
                    "Let us remind you to Buy Electricity. Set a reminder date and we wont forget.",
                },
                {
                  title: "Pay with Bank Transfer",
                  link: "hahahah",
                  final_text:
                    "Make payments via our Bank Transfer option and get value immedialtely.",
                  description:
                    "Make payments via our Bank Transfer option and get value immedialtely.",
                },
              ].map((sector, index) => (
                <SwapTextCard
                  link={sector.link}
                  key={index}
                  title={sector.title}
                  finalText={sector.final_text}
                  initialText={sector.description}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Key Figures Section */}
        <section className="py-4 lg:py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 lg:text-4xl">
              Key Figures
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { figure: "1M+", description: "Happy Customers" },
                { figure: "99.9%", description: "On-Time Payments" },
                { figure: "24/7", description: "Customer Support" },
                { figure: "36+", description: "States" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="mb-2 text-4xl font-bold text-purple-600">
                    {stat.figure}
                  </p>
                  <p className="text-lg text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <AppDownloadSection />
        {/* Latest News Section */}
        <section className="py-4 lg:py-8">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 lg:text-4xl">
              Latest News
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Charge Eaze Expands Food Tech Portfolio",
                  date: "May 15, 2023",
                },
                {
                  title: "New Sustainable Investment Initiative Launched",
                  date: "April 28, 2023",
                },
                {
                  title: "Charge Eaze Division Partners with AI Startup",
                  date: "April 10, 2023",
                },
              ].map((news, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-[var(--accent-3)] p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {news.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">{news.date}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-500 hover:underline"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
