const VolunteerProgram = () => {
  return (
    <div className="bg-blue-100 min-h-screen container">
      <img
        src="/assets/images/kid.webp"
        alt="Descriptive alt text"
        className="w-full h-full object-cover  shadow-lg mb-8"
      />
      <div className="bg-blue-100 p-6 mx-auto max-w-3xl">
        {/* Big Image */}

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">Volunteer Program</h1>

        <p className="mb-6">
          It’s easy to get involved in Waamo Relief Development. From leadership
          groups to Women Support Group, to youth Support Group. You’ll find a
          comprehensive mix of interests and needs. Scroll below for information
          on volunteer and service opportunities.
        </p>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Admin Support:</h2>
          <p>
            Help with front office. Register new members. Make phone calls to
            current and existing members.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">School Programs:</h2>
          <p>
            Help with school programs such as our ESL classes. In-person and in
            zoom classes. If you’re an educator and would like to initiate a new
            skill class, please let our administrator know.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Fundraising at Local Events:
          </h2>
          <p>
            Help fundraising efforts with our staff. If you have ideas of how to
            improve and implement new ways to fundraise, please let our
            administration team know.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Transportation:</h2>
          <p>
            Help with transportation needs such as giving rides to families for
            doctor appointments, grocery shopping, etc.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Grade school Tutoring:
          </h2>
          <p>Helping with homework (reading, math, writing) of all levels</p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Women support group:</h2>
          <p>
            Help our local woman members with ideas such as how to open a
            business, how to access local programs, how to care for their new
            infants, or how to take care of yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProgram;
