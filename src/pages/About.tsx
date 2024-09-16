import {
  Button,
  Card,
  Container,
  Heading,
  Inset,
  Text,
} from "@radix-ui/themes";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { Footer } from "../components/Footer";
import electricity from "../assets/electricity.jpg";
import operation from "../assets/operation.jpg";
import airtime from "../assets/airtime.jpg";
import education from "../assets/education.jpg";
import AnimatedTeamPage from "../components/AnimatedTeam";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Value Proposition */}
      <header className="relative bg-gradient-to-r from-blue-400 to-purple-400 py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              About Charge Eaze Payment Hub
            </h1>
            <p className="max-w-2xl text-xl">
              Simplifying Payments, Empowering You.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/2 rounded-tl-full bg-white"
        ></motion.div>
      </header>
      <section className="py-8 lg:py-14">
        <div className="container mx-auto px-4">
          <Heading
            size={{ initial: "7", md: "9" }}
            className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            align={"center"}
          >
            Who We Are
          </Heading>
          <Container className="text-center">
            <Text color="gray" size={"2"}>
              At Charge Ease, we understand that managing your finances can be
              overwhelming with numerous bills and payment deadlines. That's why
              we specialize in providing a seamless solution for all your
              electricity bills, mobile recharges, and various other payments.
              Our mission is to simplify your financial tasks, ensuring that you
              stay on top of your bills and never miss a payment. <br />
              Our user-friendly platform is designed to make managing your
              payments as easy as possible. With Charge Ease, you can
              conveniently handle all your transactions from one place, saving
              you time and effort. Whether it's paying your utility bills,
              recharging your mobile phone, or managing other regular payments,
              our system ensures that every transaction is processed swiftly and
              securely. <br />
              We are committed to providing a hassle-free experience, so you can
              focus on what matters most to you. By using Charge Ease, you can
              enjoy peace of mind knowing that your payments are handled
              efficiently and on time. Say goodbye to the stress of missed
              deadlines and complex payment processes. Trust Charge Ease Bills
              Payment Hub to keep your finances in order and simplify your life.
            </Text>
          </Container>
        </div>
      </section>
      {/* Mission, Vision, and Core Values */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:w-2/3 mx-auto my-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <Heading
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                mb={"4"}
              >
                Our Mission
              </Heading>
              <p className="text-gray-600">
                Our mission at Charge Ease Bills Payment Hub is to simplify
                financial management by providing a secure, user-friendly
                platform for seamless bill payments and transactions, ensuring
                convenience and timely service.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-white p-8 shadow-lg"
            >
              <Heading
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                mb={"4"}
              >
                Our Vision
              </Heading>
              <p className="text-gray-700">
                Our vision is to be the leading platform for effortless bill
                payments, empowering people to manage their finances easily and
                efficiently while setting new standards for convenience and
                customer satisfaction.
              </p>
            </motion.div>
          </div>
          <CoreValues />
        </div>
      </section>
      <AnimatedTeamPage />
      {/* Call to Action */}
      <section className=" py-20 text-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Join Us in Shaping the Future
          </h2>
          <p className="mb-8 text-xl">
            Discover opportunities to collaborate and innovate with Charge Eaze
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-full bg-purple-700 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-gray-400"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </section>

      <Footer
        Ficon={<Facebook />}
        Ticon={<Twitter />}
        Iicon={<Instagram />}
        Flink="https://www.facebook.com/profile.php?id=61558674541651&mibextid=ZbWKwL"
        Ilink="https://www.instagram.com/chargeease?igsh=MTZudmt0cHlhMmJzaQ=="
        Tlink="https://www.x.com/5amastchltd?t=-545yqxqAKmN3F6M9jZaIA&s=08"
      />
    </div>
  );
}

function CoreValues() {
  const [valueActive, setValueActive] = useState("Electricity Bill Payments");
  return (
    <>
      <div className="md:hidden">
        <Card
          variant="ghost"
          style={{ margin: "auto" }}
          className="w-[90%] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          <Heading align={"center"} size={"8"}>
            Our Services
          </Heading>
          <div className="flex flex-col items-center justify-around mt-10">
            <ul className="flex overflow-auto w-full mb-6">
              {[
                "Electricity Bill Payments",
                "Mobile Recharge",
                "Internet & Cable TV Subscriptions",
                "Education Payments",
              ].map((value, index) => (
                <div key={index} className="flex">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                      scale: valueActive === value ? 1 : 0.9,
                    }}
                  >
                    <Button
                      radius="full"
                      size={"1"}
                      mb={"2"}
                      style={{ width: "10rem", height: "3rem" }}
                      variant={value === valueActive ? "solid" : "ghost"}
                      onClick={() => setValueActive(value)}
                    >
                      {value}
                    </Button>
                  </motion.div>
                </div>
              ))}
            </ul>
            {valueActive === "Electricity Bill Payments" && (
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "18rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={electricity} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Effortlessly pay your electricity bills on time with our
                    seamless platform, supporting all major electricity
                    providers.
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Mobile Recharge" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={airtime} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Instantly recharge your mobile phone with ease, covering all
                    major networks for voice, data, and SMS plans.
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Internet & Cable TV Subscriptions" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={operation} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Manage and renew your internet and cable TV services,
                    ensuring uninterrupted access to entertainment and online
                    services.
                  </Text>
                </Card>
              </motion.div>
            )}

            {valueActive === "Education Payments" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 1 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  style={{
                    background: "var(--accent-11)",
                    height: "22rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={education} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Easily handle school fees and other educational expenses for
                    both local and international institutions.
                  </Text>
                </Card>
              </motion.div>
            )}
          </div>
        </Card>
      </div>
      <div className="hidden md:block ">
        <Card variant="ghost" style={{ margin: "auto" }} className="w-[90%]">
          <Heading align={"center"} color="purple" size={"8"}>
            Our Services
          </Heading>
          <div className="flex items-center justify-around mt-10">
            <ul className="">
              {[
                "Electricity Bill Payments",
                "Mobile Recharge",
                "Internet & Cable TV Subscriptions",
                "Education Payments",
              ].map((value, index) => (
                <div key={index} className="flex relative items-center">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                      scale: valueActive === value ? 1 : 0.9,
                    }}
                  >
                    <Button
                      radius="none"
                      ml={"5"}
                      mb={"6"}
                      variant={value === valueActive ? "solid" : "ghost"}
                      onClick={() => setValueActive(value)}
                    >
                      {value === valueActive && (
                        <span className="absolute -inset-x-2 h-10 w-1 bg-[var(--accent-11)] z-30" />
                      )}
                      {value}
                    </Button>
                  </motion.div>
                  <span className="absolute -inset-x-2 h-full w-1 bg-[var(--accent-5)]" />
                </div>
              ))}
            </ul>
            {valueActive === "Electricity Bill Payments" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  m={"4"}
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "24rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={electricity} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Effortlessly pay your electricity bills on time with our
                    seamless platform, supporting all major electricity
                    providers.
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Mobile Recharge" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  m={"4"}
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "24rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={airtime} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Instantly recharge your mobile phone with ease, covering all
                    major networks for voice, data, and SMS plans.
                  </Text>
                </Card>
              </motion.div>
            )}
            {valueActive === "Internet & Cable TV Subscriptions" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  m={"4"}
                  variant="ghost"
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "24rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={operation} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Manage and renew your internet and cable TV services,
                    ensuring uninterrupted access to entertainment and online
                    services.
                  </Text>
                </Card>
              </motion.div>
            )}

            {valueActive === "Education Payments" && (
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 100 }}
                transition={{ duration: 0.5, bounce: false }}
              >
                <Card
                  variant="ghost"
                  m={"4"}
                  style={{
                    width: "30rem",
                    background: "var(--accent-11)",
                    height: "24rem",
                  }}
                >
                  <Inset clip="padding-box" side="top" pb="current">
                    <img src={education} alt="" />
                  </Inset>
                  <Text size={"2"} style={{ color: "white" }}>
                    Easily handle school fees and other educational expenses for
                    both local and international institutions.
                  </Text>
                </Card>
              </motion.div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}
