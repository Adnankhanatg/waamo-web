import React from "react";

const EducationalProgram: React.FC = () => {
  return (
    <div className="container ">
      <img
        src="/assets/images/Education.webp"
        alt="Descriptive alt text"
        className="w-full h-full object-cover  shadow-lg mb-8"
      />
      <div className="bg-blue-100 pt-8   px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 min-h-screen p-10">
        {/* WAAMO Relief Educational Program Intro */}
        <section className="mb-10">
          <h1 className="text-4xl font-semibold mb-6">
            WAAMO Relief Educational Program
          </h1>
          <p>
            WAAMO will provide two divisions of service. WAAMO will provide
            education and social relief services.
          </p>
        </section>

        {/* Our Education Focus */}
        <section className="flex flex-wrap  mb-10">
          <div className="w-full md:w-1/2 mt-20  p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Our Education focus will be:
            </h2>
            <ul className="list-disc pl-5">
              <li>
                Vocational Training (with outlines/syllabus) with certificates
                upon completion (including CAN and Mechanic basic level)
              </li>
              <li>GED and ESL classes for adults.</li>
              <li>Citizenship and ESL Citizenship.</li>
              <li>Family Literacy.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4">
            {/* Placeholder for an image */}
            <img
              src="assets/images/Educational-program.jpg"
              alt="Education Image"
              className="w-full rounded shadow-lg"
            />
          </div>
        </section>

        {/* Our Social Relief Focus */}
        <section className="flex flex-wrap mb-10">
          <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
            {/* Placeholder for an image */}
            <img
              src="assets/images/kids2.jpg"
              alt="Social Relief Image"
              className="w-full h-[20rem] rounded shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-20 p-4 order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">
              Our Social Relief focus will be:
            </h2>
            <ul className="list-disc pl-5">
              <li>Mentor Program for Somali youth (ages 13-21).</li>
              <li>Donations - to assist with paying for funerals.</li>
              <li>Financial Literacy.</li>
              <li>Family Literacy.</li>
              <li>House purchasing.</li>
            </ul>
          </div>
        </section>

        {/* Fundraising and Outreach */}
        <section className="flex flex-wrap">
          <div className="w-full mt-8  md:w-1/2 p-4">
            <h2 className="text-2xl  font-semibold mb-4">
              Fundraising and Outreach:
            </h2>
            <ul className="list-disc pl-5">
              <li>Federal grants.</li>
              <li>Fund raising events within the East African community.</li>
              <li>
                WAAMO will collaborate with other non-profits to address
                additional needs.
              </li>
              <li>Fundraising marketing materials - like restaurant menus.</li>
              <li>Fundraising dinner.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4">
            {/* Placeholder for an image */}
            <img
              src="/assets/images/kid.png"
              alt="Fundraising Image"
              className="w-full h-[17rem] rounded shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationalProgram;
