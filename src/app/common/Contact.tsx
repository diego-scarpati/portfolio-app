import React from "react";
import Link from "next/link";
import EmailIcon from "../assets/icons/EmailIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import WhatsappIcon from "../assets/icons/WhatsappIcon";
import CvIcon from "../assets/icons/CvIcon";

function Contact() {
  return (
    <div className="flex mt-12 w-1/2 lg:w-auto justify-evenly">
      <Link href="https://www.linkedin.com/in/diego-scarpati/" target="_blank">
        <LinkedInIcon size="32" className="md:m-3 lg:m-4 rounded-md" />
      </Link>
      <Link href="https://github.com/diego-scarpati" target="_blank">
        <GitHubIcon size="32" className="md:m-3 lg:m-4 rounded-md" />
      </Link>
      <Link href="mailto:diegoscarpati13gmail.com" target="_blank">
        <EmailIcon size="32" className="md:m-3 lg:m-4 rounded-md" />
      </Link>
      <Link href="https://wa.me/+61499404825" target="_blank">
        <WhatsappIcon size="32" className="md:m-3 lg:m-4 rounded-md" />
      </Link>
      <Link href="Diego-Scarpati.pdf" download="Diego-Scarpati" target="_blank">
        <CvIcon size="32" className="md:m-3 lg:m-4 rounded-md" />
      </Link>
    </div>
  );
}

export default Contact;
