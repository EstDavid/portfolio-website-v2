import { GithubIcon, Linkedin, Mail } from "lucide-react";

export const contactInfo = {
  email: "estdav@protonmail.com",
  linkedin: "https://www.linkedin.com/in/david-de-esteban",
  github: "https://github.com/EstDavid",
  phone: "", // Add phone number if available
};

export const contactContent = {
  title: "Get in Touch",
  subtitle: "I would love to hear from you!",
  downloadCvText: "Download CV",
  hrefCV: '/assets/CV.pdf',
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    messagePlaceholder: "Share your thoughts...",
    termsText: "I agree to Terms",
    submitText: "Send"
  }
};

export const contactLinks = [
  {
    icon: Mail,
    href: `mailto:${contactInfo.email}`,
    text: contactInfo.email
  },
  {
    icon: Linkedin,
    href: contactInfo.linkedin,
    text: contactInfo.linkedin
  },
  {
    icon: GithubIcon,
    href: contactInfo.github,
    text: contactInfo.github
  }
];

export const contactFormText = {
  somethingOccurred: `Something occurred, please try again later or send me an email to ${contactInfo.email}`,
  thereWasError: 'There was an error sending the message',
  thankYou: 'Thank you, ',
  messageSent: 'Your message has been sent. I will get back to you as soon as possible.',
  autoReply: 'An automatic reply was sent to your email address. Please check your inbox or spam folder.'
};
