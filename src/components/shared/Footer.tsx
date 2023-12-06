import React from "react";
import { footerData } from "@/constants/footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-500 text-white w-full  ">
      <div className="container">
        {/* <div className=" flex py-8  mx-4 sm:mx-8 pr-8 md:mx-12 lg:mx-16 xl:mx-24 flex-wrap justify-between"> */}
        <div className=" flex py-8  mx-4 flex-wrap justify-between">
          {/* Support Column */}
          <div className="w-full md:w-1/3 mb-4 pr-4 md:mb-0">
            <h3 className="font-bold mb-3 text-xl">
              {footerData.support.title}
            </h3>
            <p className="pr-4">{footerData.support.description}</p>
            <a
              href={footerData.support.action.href}
              className="mt-4 truncate w-[10rem] bg-white text-slate-400 rounded px-4 py-2 hover:bg-opacity-80 transition block"
            >
              {footerData.support.action.label}
            </a>
          </div>

          {/* Explore Column */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="font-bold mb-3 text-xl">Explore</h3>
            <div className="flex flex-col gap-1">
              {footerData.explore.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="w-full  md:w-1/3">
            <h3 className="font-bold mb-3 text-xl">Contact</h3>
            <div className="flex flex-col  gap-1">
              {footerData.contact.number1.map((detail, idx) => (
                <a className="hover:underline" href="tel:+12149292796">
                  <span key={idx}>{detail}</span>
                </a>
              ))}
              {footerData.contact.number2.map((detail, idx) => (
                <a className="hover:underline" href="tel:+16126447979">
                  <span key={idx}>{detail}</span>
                </a>
              ))}
              {footerData.contact.mail.map((detail, idx) => (
                <a className="hover:underline" href={`mailto:${detail}`}>
                  <span key={idx}>{detail}</span>
                </a>
              ))}
              {footerData.contact.address.map((detail, idx) => (
                <span key={idx}>{detail}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
