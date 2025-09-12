'use client';

import { cn } from "@/lib/utils";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { contactContent, contactFormText } from "@/lib/data/contact";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import ContactDialog from "../dialogs/contact-dialog";

const classNameLabel: HTMLAttributes<HTMLDivElement>['className'] =
  "block text-sm font-medium mb-2";
const classNameInput: HTMLAttributes<HTMLDivElement>['className'] =
  "w-full px-4 py-3 rounded-lg border border-neutral/20 dark:border-white/20 bg-neutral/5 dark:bg-neutral/20 placeholder-neutral/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const flagTermsAndConditions = process.env.NEXT_PUBLIC_FLAG_TERMS_AND_CONDITIONS === 'TRUE';

export default function ContactForm ({ emailVariables }: {
  emailVariables: {
    emailServiceId: string;
    emailTemplateId: string;
    emailPublicKey: string;
  };
}) {
  const {
    emailServiceId,
    emailTemplateId,
    emailPublicKey
  } = emailVariables;

  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const initialFormData = {
    name: "",
    email: "",
    message: "",
    agreeToTerms: false
  };
  const [formData, setFormData] = useState(initialFormData);

  const form = useRef<null | HTMLFormElement>(null);

  useEffect(() => {
    if (error) {
      setOpenDialog(true);
    }
  }, [error]);

  const isFormValid = () => {
    return (
      formData.name.trim().length > 2 &&
      formData.email.trim().length &&
      emailRegex.test(formData.email) &&
      formData.message.trim().length > 5 &&
      (flagTermsAndConditions ? formData.agreeToTerms : true)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      if (value.trim() === "" || emailRegex.test(value)) {
        if (emailError.length) {
          setEmailError("");
        }
      } else {
        setEmailError("Please enter a valid email address");
      }
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: e.target.checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    try {
      await emailjs
        .sendForm(
          emailServiceId,
          emailTemplateId,
          form.current,
          { publicKey: emailPublicKey }
        );

      setOpenDialog(true);
    } catch (error) {
      console.error(error);
      setError(contactFormText.somethingOccurred);
    }

  };

  return (
    < div className="bg-white dark:bg-primary rounded-2xl p-8 shadow-lg transition-transform duration-200 hover:scale-110" >
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <Label htmlFor="name" className={classNameLabel}>
            {contactContent.form.nameLabel}
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={classNameInput}
          />
        </div>

        {/* Email Field */}
        <div>
          <Label htmlFor="email" className={classNameLabel}>
            {contactContent.form.emailLabel}
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={classNameInput}
          />
          {emailError && (
            <p id="email-error" className="mt-1 text-tiny text-red-600 dark:text-red-800">
              {emailError}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <Label htmlFor="message" className={classNameLabel}>
            {contactContent.form.messageLabel}
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={contactContent.form.messagePlaceholder}
            rows={5}
            required
            className={cn(classNameInput, "resize-none")}
          />
        </div>

        {/* Terms Checkbox */}
        {flagTermsAndConditions &&
          <div className="flex items-center gap-3">
            <Input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
              required
              className="w-4 h-4 text-primary bg-neutral/5 dark:bg-neutral/20 border border-neutral/20 dark:border-white/20 rounded focus:ring-primary focus:ring-2"
            />
            <Label htmlFor="agreeToTerms" className="text-sm text-neutral dark:text-white">
              {contactContent.form.termsText}
            </Label>
          </div>
        }

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium"
          disabled={!isFormValid()}
        >
          {contactContent.form.submitText}
        </Button>
      </form>
      <ContactDialog open={openDialog} onOpenChange={(open) => {
        if (!open && error) {
          setError("");
        }
        if (!open && !error) {
          setFormData(initialFormData);
        }
        setOpenDialog(open);
      }} name={formData.name} error={error}>
      </ContactDialog>
    </div >
  );
}