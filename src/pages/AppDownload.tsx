import { Container, Heading, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { AppDownloadSection } from "../components/AppDown";
import { Footer } from "../components/Footer";

export default function AppDownload() {
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
            className="mb-8"
            align={"center"}
            color="purple"
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
      <AppDownloadSection />

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
