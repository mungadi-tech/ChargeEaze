import { ScrollArea } from "../components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function Privacy() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        Privacy and Return Policy for Charge Eaze
      </h1>
      <Tabs defaultValue="privacy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
          <TabsTrigger value="return">Return Policy</TabsTrigger>
        </TabsList>
        <TabsContent value="privacy">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="information-collection">
                <AccordionTrigger>
                  1. Information Collection and Use
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    1.1. We collect several types of information for various
                    purposes to provide and improve our service to you:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      Personal Data: While using our Service, we may ask you to
                      provide us with certain personally identifiable
                      information that can be used to contact or identify you
                      ("Personal Data"). This may include, but is not limited
                      to:
                    </li>
                    <ul className="list-circle pl-6">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Address, State, Province, ZIP/Postal code, City</li>
                      <li>Cookies and Usage Data</li>
                    </ul>
                    <li>
                      Usage Data: We may also collect information on how the
                      Service is accessed and used ("Usage Data").
                    </li>
                  </ul>
                  <p>1.2. We use the collected data for various purposes:</p>
                  <ul className="list-disc pl-6">
                    <li>To provide and maintain our Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>
                      To allow you to participate in interactive features of our
                      Service when you choose to do so
                    </li>
                    <li>To provide customer support</li>
                    <li>
                      To gather analysis or valuable information so that we can
                      improve our Service
                    </li>
                    <li>To monitor the usage of our Service</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data-protection">
                <AccordionTrigger>2. Data Protection</AccordionTrigger>
                <AccordionContent>
                  <p>
                    2.1. We implement a variety of security measures to maintain
                    the safety of your personal information when you enter,
                    submit, or access your personal information.
                  </p>
                  <p>
                    2.2. We comply with applicable data protection laws in
                    Nigeria, including the Nigeria Data Protection Regulation
                    (NDPR).
                  </p>
                  <p>
                    2.3. We will retain your Personal Data only for as long as
                    is necessary for the purposes set out in this Privacy
                    Policy.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="third-party-disclosure">
                <AccordionTrigger>3. Third-Party Disclosure</AccordionTrigger>
                <AccordionContent>
                  <p>
                    3.1. We do not sell, trade, or otherwise transfer to outside
                    parties your personally identifiable information unless we
                    provide you with advance notice.
                  </p>
                  <p>
                    3.2. This does not include website hosting partners and
                    other parties who assist us in operating our website,
                    conducting our business, or servicing you, so long as those
                    parties agree to keep this information confidential.
                  </p>
                  <p>
                    3.3. We may disclose your information when we believe
                    release is appropriate to comply with the law, enforce our
                    site policies, or protect ours or others' rights, property,
                    or safety.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cookies">
                <AccordionTrigger>4. Cookies</AccordionTrigger>
                <AccordionContent>
                  <p>
                    4.1. We use cookies and similar tracking technologies to
                    track the activity on our Service and we hold certain
                    information.
                  </p>
                  <p>
                    4.2. Cookies are files with a small amount of data which may
                    include an anonymous unique identifier. You can instruct
                    your browser to refuse all cookies or to indicate when a
                    cookie is being sent.
                  </p>
                  <p>4.3. We use the following types of cookies:</p>
                  <ul className="list-disc pl-6">
                    <li>
                      Essential cookies: Necessary for the website to function
                      properly
                    </li>
                    <li>
                      Functionality cookies: Remember choices you make to
                      improve your experience
                    </li>
                    <li>
                      Analytical/performance cookies: Allow us to recognize and
                      count the number of visitors and see how visitors move
                      around our website
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="changes-to-policy">
                <AccordionTrigger>
                  5. Changes to This Privacy Policy
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    5.1. We may update our Privacy Policy from time to time. We
                    will notify you of any changes by posting the new Privacy
                    Policy on this page.
                  </p>
                  <p>
                    5.2. You are advised to review this Privacy Policy
                    periodically for any changes. Changes to this Privacy Policy
                    are effective when they are posted on this page.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="return">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="digital-services">
                <AccordionTrigger>1. Digital Services</AccordionTrigger>
                <AccordionContent>
                  <p>
                    1.1. Due to the nature of our digital services (airtime,
                    data bundles, cable TV subscriptions, WAEC pins, JAMB pins,
                    and electricity bills), we generally do not offer refunds
                    once a service has been delivered or a transaction has been
                    completed.
                  </p>
                  <p>
                    1.2. In cases where a service was not delivered due to
                    technical issues on our part, we will either complete the
                    transaction or provide a full refund.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="refund-process">
                <AccordionTrigger>2. Refund Process</AccordionTrigger>
                <AccordionContent>
                  <p>
                    2.1. If you believe you are eligible for a refund, please
                    contact our customer support team within 24 hours of the
                    transaction.
                  </p>
                  <p>2.2. To request a refund, you will need to provide:</p>
                  <ul className="list-disc pl-6">
                    <li>Your account information</li>
                    <li>Transaction ID</li>
                    <li>Date and time of the transaction</li>
                    <li>Reason for the refund request</li>
                  </ul>
                  <p>
                    2.3. Our team will review your request and respond within
                    2-3 business days.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="exceptions">
                <AccordionTrigger>3. Exceptions</AccordionTrigger>
                <AccordionContent>
                  <p>
                    3.1. In cases of unauthorized transactions or fraud, please
                    contact us immediately. We will investigate and take
                    appropriate action, which may include refunding the
                    transaction amount.
                  </p>
                  <p>
                    3.2. For issues with third-party services (e.g., mobile
                    network operators, cable TV providers), we will assist in
                    resolving the issue with the service provider, but the final
                    resolution will depend on their policies.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cancellations">
                <AccordionTrigger>4. Cancellations</AccordionTrigger>
                <AccordionContent>
                  <p>
                    4.1. Once a transaction is initiated, it may not be possible
                    to cancel it due to the immediate nature of digital service
                    delivery.
                  </p>
                  <p>
                    4.2. If you need to cancel a transaction that has not yet
                    been processed, please contact our customer support team
                    immediately.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="changes-to-policy-return">
                <AccordionTrigger>
                  5. Changes to This Return Policy
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    5.1. We reserve the right to modify this return policy at
                    any time. Changes and clarifications will take effect
                    immediately upon their posting on the website.
                  </p>
                  <p>
                    5.2. If we make material changes to this policy, we will
                    notify you here that it has been updated, so that you are
                    aware of what information we collect, how we use it, and
                    under what circumstances, if any, we use and/or disclose it.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
