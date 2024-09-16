import { motion } from "framer-motion";
import { Apple, Rocket } from "lucide-react";

export function AppDownloadSection() {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-400 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Download the Charge Ease App
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Manage your bills on the go with our easy-to-use mobile app.
              Available for both iOS and Android devices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#ios-download"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple className="w-6 h-6 mr-2" />
                Download for iOS
              </motion.a>
              <motion.a
                href="#android-download"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-6 h-6 mr-2" />
                Download for Android
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="/placeholder.svg?height=600&width=300"
                alt="Charge Ease mobile app screenshot"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-purple-600 opacity-20 rounded-3xl"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-[600px] bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          </motion.div>
        </div>
        <motion.div
          className="mt-16 bg-blue-800 bg-opacity-30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            App Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Easy Bill Payments",
              "Payment Reminders",
              "Transaction History",
              "Multiple Payment Methods",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl text-white">{index + 1}</span>
                </div>
                <p className="text-blue-200">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
