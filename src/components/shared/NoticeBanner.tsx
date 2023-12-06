import { BsFillTelephoneFill } from "react-icons/bs";

import { GrMail } from "react-icons/gr";

const NoticeBanner = () => {
  return (
    <div className="bg-orange-500">
      <div className="bg-orange-500 p-2 container z-20 w-full text-white px-2 md:px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-2">
          <GrMail className="self-center" />
          <a
            className="hover:underline"
            href={`mailto:contact@waamoreliefdevelopment.org`}
          >
            <span>Contact@waamoreliefdevelopment.org</span>
          </a>
          <BsFillTelephoneFill className="self-center" />
          <div className="text-center">
            <a className="hover:underline" href="tel:+16126447979">
              <span>(612) 644 - 7979</span>
            </a>{" "}
            /
            <a className="hover:underline" href="tel:+12149292796">
              <span> (214) 929 - 2796</span>
            </a>
          </div>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            className="underline"
            href="https://waamo.securepayments.cardpointe.com/pay"
          >
            <button className="bg-red-600 text-white rounded-full py-1 px-3">
              DONATE NOW
            </button>
          </a>
          <a className="underline" href="/registration">
            <button className="bg-red-600 text-white rounded-full py-1 px-3">
              REGISTER HERE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default NoticeBanner;
