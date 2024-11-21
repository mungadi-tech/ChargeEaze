import { ScrollArea } from "../components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function Terms() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        Terms and Conditions for Charge Eaze
      </h1>
      <ScrollArea className="h-[600px] w-full rounded-md border p-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="introduction">
            <AccordionTrigger>1. Introduction</AccordionTrigger>
            <AccordionContent>
              <p>
                1.1. These Terms and Conditions the "Agreement" govern your use
                of the Charge Eaze service. As used in this Agreement, "Charge
                Eaze service", "service", or "the service" means the service
                provided by Charge Eaze for purchasing data, airtime bundles,
                cable subscriptions, WAEC pins, JAMB pins, and paying
                electricity bills.
              </p>
              <p>
                1.2. Charge Eaze is owned and operated by Karton Innovation RC
                7855917, a company registered in Nigeria. Our headquarters are
                located in Lagos, Nigeria.
              </p>
              <p>
                1.3. By using our service, you agree to these terms. Please read
                this Agreement carefully and make sure you understand it. If you
                do not understand the Agreement or do not accept any part of it,
                then you may not use the service.
              </p>
              <p>
                1.4. We may change these terms at any time. We'll post notice of
                modifications to these terms on this page. You should ensure
                that you have read and agree with our most recent terms when you
                use our service.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="services">
            <AccordionTrigger>2. Services Offered</AccordionTrigger>
            <AccordionContent>
              <p>2.1. Charge Eaze offers the following services:</p>
              <ul className="list-disc pl-6">
                <li>Purchase of mobile data</li>
                <li>Purchase of airtime bundles</li>
                <li>Payment for cable TV subscriptions</li>
                <li>Purchase of WAEC pins</li>
                <li>Purchase of JAMB pins</li>
                <li>Payment of electricity bills</li>
              </ul>
              <p>
                2.2. We reserve the right to add, modify, or remove any services
                at any time.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accounts">
            <AccordionTrigger>3. User Accounts</AccordionTrigger>
            <AccordionContent>
              <p>
                3.1. To use our services, you may need to create an account. You
                must provide accurate and complete information when creating
                your account.
              </p>
              <p>
                3.2. You are responsible for maintaining the confidentiality of
                your account and password. You agree to accept responsibility
                for all activities that occur under your account.
              </p>
              <p>
                3.3. You must be at least 18 years old to create an account and
                use our services.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="payments">
            <AccordionTrigger>4. Payments and Billing</AccordionTrigger>
            <AccordionContent>
              <p>
                4.1. All services are provided on a prepaid basis. You must have
                sufficient funds in your Charge Eaze account to complete any
                transaction.
              </p>
              <p>
                4.2. We may use third-party payment processors to facilitate the
                collection of funds. These processors are not controlled by us,
                and we are not responsible for their actions or omissions.
              </p>
              <p>
                4.3. All fees are non-refundable unless otherwise stated or
                required by law.
              </p>
              <p>
                4.4. We reserve the right to change our fees at any time. We
                will provide notice of any fee changes on our website or via
                email.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="availability">
            <AccordionTrigger>
              5. Service Availability and Accuracy
            </AccordionTrigger>
            <AccordionContent>
              <p>
                5.1. While we strive to ensure that our services are available
                at all times, we do not guarantee uninterrupted access to our
                services.
              </p>
              <p>
                5.2. We aim to ensure that all information on our platform is
                accurate and up-to-date. However, we do not guarantee the
                accuracy, completeness, or timeliness of any information on our
                platform.
              </p>
              <p>
                5.3. We are not responsible for any errors or delays in the
                delivery of services caused by third-party providers (e.g.,
                mobile network operators, cable TV providers, electricity
                companies).
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="responsibilities">
            <AccordionTrigger>
              6. User Responsibilities and Restrictions
            </AccordionTrigger>
            <AccordionContent>
              <p>
                6.1. You agree to use our services only for lawful purposes and
                in accordance with this Agreement.
              </p>
              <p>6.2. You must not:</p>
              <ul className="list-disc pl-6">
                <li>Use our services for any illegal activities</li>
                <li>
                  Attempt to gain unauthorized access to our systems or other
                  users' accounts
                </li>
                <li>
                  Use our services in any way that could damage, disable, or
                  impair our services
                </li>
                <li>
                  Resell or attempt to resell our services without our express
                  written permission
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="intellectual-property">
            <AccordionTrigger>7. Intellectual Property</AccordionTrigger>
            <AccordionContent>
              <p>
                7.1. All content on the Charge Eaze platform, including but not
                limited to text, graphics, logos, and software, is the property
                of Charge Eaze or its content suppliers and is protected by
                Nigerian and international copyright laws.
              </p>
              <p>
                7.2. You may not use, reproduce, or distribute any content from
                our platform without our express written permission.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="privacy">
            <AccordionTrigger>8. Privacy and Data Protection</AccordionTrigger>
            <AccordionContent>
              <p>
                8.1. We collect and process personal data in accordance with our
                Privacy Policy, which is incorporated into these Terms and
                Conditions by reference.
              </p>
              <p>
                8.2. We comply with all applicable data protection laws in
                Nigeria.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="liability">
            <AccordionTrigger>9. Limitation of Liability</AccordionTrigger>
            <AccordionContent>
              <p>
                9.1. To the fullest extent permitted by law, Charge Eaze shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses resulting
                from:
              </p>
              <ul className="list-disc pl-6">
                <li>Your use or inability to use our services</li>
                <li>
                  Any unauthorized access to or use of our servers and/or any
                  personal information stored therein
                </li>
                <li>
                  Any interruption or cessation of transmission to or from our
                  services
                </li>
                <li>
                  Any bugs, viruses, trojan horses, or the like that may be
                  transmitted to or through our services
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="termination">
            <AccordionTrigger>10. Termination</AccordionTrigger>
            <AccordionContent>
              <p>
                10.1. We may terminate or suspend your account and access to our
                services immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach
                the Terms.
              </p>
              <p>
                10.2. Upon termination, your right to use the service will
                immediately cease.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="governing-law">
            <AccordionTrigger>11. Governing Law</AccordionTrigger>
            <AccordionContent>
              <p>
                11.1. These Terms shall be governed and construed in accordance
                with the laws of the Federal Republic of Nigeria, without regard
                to its conflict of law provisions.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="dispute-resolution">
            <AccordionTrigger>12. Dispute Resolution</AccordionTrigger>
            <AccordionContent>
              <p>
                12.1. Any disputes arising out of or relating to these Terms or
                the services provided by Charge Eaze shall first be attempted to
                be resolved through good-faith negotiations.
              </p>
              <p>
                12.2. If the dispute cannot be resolved through negotiations, it
                shall be submitted to arbitration in Lagos, Nigeria, in
                accordance with the Arbitration and Conciliation Act, Cap A18,
                Laws of the Federation of Nigeria, 2004.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
      <p className="mt-6 text-sm text-gray-600">
        By using our services, you acknowledge that you have read and understood
        this Agreement and agree to be bound by its terms and conditions.
      </p>
    </div>
  );
}
