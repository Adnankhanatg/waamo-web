const AboutUs = () => {
  return (
    <div className="container ">
      <img
        src="/assets/images/kidsLaughing.webp"
        alt="Descriptive alt text"
        className="w-full h-full object-cover  shadow-lg mb-8"
      />
      <div className="max-w-3xl mx-auto p-4 space-y-6 " >
        {/* Big Image at the top */}

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>

        {/* Main Text */}
        <p className="text-lg">
          Waamo Relief Development is a nonprofit organization dedicated to
          empowering and uplifting our local community here in MN. Our vision is
          to provide access to resources, programs, and services that promote
          self-sufficiency, education growth, and neighborhood support. We
          believe that everyone deserves equal opportunities to thrive and
          succeed, regardless of their background, race, and or circumstances.
          Waamo was founded by a group of volunteers spearheaded by Mr.
          Abdirazak Iddle who’s currently the head directors of the agency.
        </p>

        <p className="text-lg mt-4">
          If you would like to join our team and help your community, there are
          several ways you can contribute:
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>
            Volunteer: We welcome volunteers who share our passion and want to
            contribute their time and skills to our cause. Visit our volunteer
            page to learn more about current opportunities.
          </li>
          <li>
            Donate: Your generous donations help us sustain and expand our
            programs. Your support can make a significant impact on the lives of
            our needy community members.
          </li>
          <li>
            Become a Member: By becoming a member, you will receive regular
            updates, exclusive access to events, and opportunities to engage
            with our community.
          </li>
        </ul>

        <p className="text-lg mt-4">
          We would love to hear from you! Feel free to reach out to us with any
          inquiries or to learn more about how you can support our cause. You
          can contact us at:
        </p>

        {/* Contact Information */}
        <address className="mt-4 space-y-2 text-lg">
          <div>
            <strong>Address:</strong> 817 Vandalia St. Unit#3. St Paul, MN 55114
          </div>
          <div>
            <strong>Phone:</strong> 214-576-6439
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@waamoreliefdevelopment.org"
              className="text-blue-600 hover:underline"
            >
              contact@waamoreliefdevelopment.org
            </a>
          </div>
        </address>
      </div>
    </div>
  );
};

export default AboutUs;
