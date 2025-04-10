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
                href="/src/assets/apk/ChargeEaze.apk"
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-6 h-6 mr-2" />
                Download for Android
              </motion.a>
            </div>
          </motion.div>
          <MobileAppShowcaseWithFreeImages />
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

function MobileAppShowcaseWithFreeImages() {
  // --- Example Free Image URLs (Replace if needed, check licenses!) ---
  // Note: These URLs might change or be removed by the provider. Self-hosting is best for production.

  // Example Android (Pixel) Mockup URL (Source: Unsplash - Photo by Daniel Romero)
  const androidMockupSrc =
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80";
  // --- Adjust max width as needed for display ---
  const mockupDisplayWidth = 280; // A reasonable max width for display

  const altText = "Charge Ease mobile app concept shown on device";

  return (
    <div className="relative py-10">
      {" "}
      {/* Container for positioning pulse */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 lg:gap-16">
        {/* Android Mockup */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50, x: 30 }} // Animate from bottom-right
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 50,
          }} // Staggered delay
        >
          <div
            className={`relative w-full max-w-[${mockupDisplayWidth}px] mx-auto`}
          >
            <img
              src={androidMockupSrc}
              alt={`${altText} (Android)`}
              width={mockupDisplayWidth} // Width hint
              // height={mockupHeight} // Remove or set to 'auto'
              className="rounded-3xl shadow-2xl object-contain w-full h-auto"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-purple-600 opacity-20 rounded-3xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
      {/* Shared Background Pulse Effect - Positioned behind the devices */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-xl md:max-w-3xl max-h-[650px] bg-blue-500 rounded-full filter blur-3xl opacity-15 animate-pulse -z-10"
        aria-hidden="true" // Hide from screen readers
      ></div>
      {/* Optional: Add attribution if required by image license */}
      {/* <div className="text-center text-xs text-gray-500 mt-4">
        Phone mockups by <a href="[Link to photographer profile on Unsplash]" target="_blank" rel="noopener noreferrer">Photographer Name</a> on Unsplash
      </div> */}
    </div>
  );
}
