import React from "react";
import SectionContainer from "@/components/custom/layout/section-container";
import { contactContent, contactLinks } from "@/lib/data/contact";
import ContactForm from "./contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const emailServiceId = process.env.EMAIL_SERVICE_ID;
const emailTemplateId = process.env.EMAIL_TEMPLATE_ID;
const emailPublicKey = process.env.EMAIL_PUBLIC_KEY;

export default function Contact () {
  if (
    emailServiceId === undefined ||
    emailTemplateId === undefined ||
    emailPublicKey === undefined
  ) {
    throw new Error('Environment variables not set');
  }

  return (
    <SectionContainer id="contact" className="bg-primary/30 dark:bg-primary/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left side - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral dark:text-white mb-4">
              {contactContent.title}
            </h2>
            <p className="text-lg text-neutral/70 dark:text-white/70 mb-8">
              {contactContent.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {contactLinks.map((link, i) => <Link
              key={i}
              href={link.href}
              className="flex items-center gap-3 text-neutral dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-6 h-6 text-primary group-hover:scale-120 transition-transform">
                <link.icon className="w-full h-full" />
              </div>
              <span className="text-lg hover:underline hover:underline-offset-4 hover:decoration-2">{link.text}</span>
            </Link>)}
          </div>

          {/* Download CV Button */}
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 w-fit"
            asChild
          >
            <Link href={contactContent.hrefCV} target="_blank" rel="noopener noreferrer" >
              <Download className="w-4 h-4" />
              {contactContent.downloadCvText}
            </Link>
          </Button>
        </div>

        <ContactForm emailVariables={{ emailServiceId, emailTemplateId, emailPublicKey }} />
      </div>
    </SectionContainer>
  );
}