/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const VolunteerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = (data: any) => {
    // console.log(data);
    setLoading(true);

    // Make a POST request to the API endpoint with the form data
    axios
      .post(
        "https://api.waamoreliefdevelopment.org/public/api/user/volunteer",
        data
      )
      .then(() => {
        // console.log("Data successfully sent:", response.data);
        setMessage("Successfully Submitted Form");
        setLoading(false);
        reset();
        setTimeout(() => {
          setMessage("");
        }, 2500);
      })
      .catch(() => {
        // console.error("Error sending data:", error);
        setMessage("Error Submitting Form ! Try Again ");
        setLoading(false);
        setTimeout(() => {
          setMessage("");
        }, 2500);
      });

    // Reset the form after submitting
  };

  return (
    <div className="container">
      <img
        src="/assets/images/people.webp"
        alt="Descriptive alt text"
        className="w-full h-full object-cover  shadow-lg mb-8"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg pt-8    mx-auto px-8 pb-4 "
      >
        <h1 className="items-center text-4xl font-bold text-center mb-8">
          Volunteer Registration
        </h1>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "This field is required." })}
            className="w-full p-2 rounded-md border"
          />
          {errors.name && typeof errors.name.message === "string" && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("adress")}
            className="w-full p-2 rounded-md border"
          />
        </div>

        {/* Telephone Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className="w-full p-2 rounded-md border"
            />
          </div>
          <div>
            <label htmlFor="work" className="block text-sm font-medium mb-2">
              Work
            </label>
            <input
              type="text"
              id="work"
              {...register("work")}
              className="w-full p-2 rounded-md border"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "This field is required." })}
            className="w-full p-2 rounded-md border"
          />
          {errors.email && typeof errors.email.message === "string" && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Reason for Volunteering */}
        <div className="mb-4">
          <label htmlFor="reason" className="block text-sm font-medium mb-2">
            Why are you interested in volunteering at Woodlands Hospice?
          </label>
          <textarea
            id="reason"
            {...register("reason")}
            className="w-full p-2 rounded-md border"
            rows={4}
          ></textarea>
        </div>

        {/* Area of Work Interest */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Which Area of Work are you interested in:
          </label>
          {[
            "Admin Support",
            "School Programs",
            "Fundraising at Local Events",
            "Transportation (giving ride to families in need) doctor appointment, grocery shopping etc.",
            "Grade school Tutoring",
            "Women support group",
          ].map((area) => (
            <div key={area}>
              <input
                type="radio"
                id={area}
                value={area}
                {...register("workInterest")}
                className="mr-2"
              />
              <label htmlFor={area} className="text-sm">
                {area}
              </label>
            </div>
          ))}
        </div>

        {/* Days of the Week Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Which days of the week would be most convenient for you?
          </label>
          <div className="flex flex-wrap gap-3">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div key={day}>
                <input
                  type="radio"
                  id={day}
                  value={day}
                  {...register("daysOfWeek")}
                  className="mr-2"
                />
                <label htmlFor={day} className="text-sm">
                  {day}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Time of the Week Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Which time of the week would be most convenient for you?
          </label>
          <div className="flex flex-wrap gap-3">
            {["Morning", "Afternoon", "Evening"].map((time) => (
              <div key={time}>
                <input
                  type="radio"
                  id={time}
                  value={time}
                  {...register("timeOfWeek")}
                  className="mr-2"
                />
                <label htmlFor={time} className="text-sm">
                  {time}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Hours Per Week Field */}
        <div className="mb-4">
          <label htmlFor="hours" className="block text-sm font-medium mb-2">
            How many hours per week would you normally be able to offer?
          </label>
          <input
            type="number"
            id="hours"
            {...register("hours", { required: "This field is required." })}
            className="w-full p-2 rounded-md border"
          />
          {errors.hours && typeof errors.hours.message === "string" && (
            <span className="text-red-500 text-sm">{errors.hours.message}</span>
          )}
        </div>

        {/* Relevant Experiences Field */}
        <div className="mb-4">
          <label
            htmlFor="experience"
            className="block text-sm font-medium mb-2"
          >
            Can you give us some information about employment, voluntary
            experiences, qualifications or training that you consider relevant
            to volunteering at Waamo Relief Development:
          </label>
          <textarea
            id="experience"
            {...register("experience")}
            className="w-full p-2 rounded-md border"
            rows={4}
          ></textarea>
        </div>

        {/* Skills Field */}
        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm font-medium mb-2">
            Do you have any particular skills you can bring to Waamo Relief
            Develpment?
          </label>
          <textarea
            id="skills"
            {...register("skills")}
            className="w-full p-2 rounded-md border"
            rows={4}
          ></textarea>
        </div>

        {/* Hobbies and Interests Field */}
        <div className="mb-4">
          <label htmlFor="hobbies" className="block text-sm font-medium mb-2">
            What are your main hobbies and interests?
          </label>
          <textarea
            id="hobbies"
            {...register("hobbies")}
            className="w-full p-2 rounded-md border"
            rows={4}
          ></textarea>
        </div>

        {/* Health Issues Field */}
        <div className="mb-4">
          <label
            htmlFor="healthIssues"
            className="block text-sm font-medium mb-2"
          >
            Do you have any special requirements/health issues that may need
            specific provision or may restrict the type of volunteering you do?
          </label>
          <textarea
            id="healthIssues"
            {...register("healthIssues")}
            className="w-full p-2 rounded-md border"
            rows={4}
          ></textarea>
        </div>

        {/* Driving License Field */}
        <div className="mb-4">
          <label
            htmlFor="drivingLicense"
            className="block text-sm font-medium mb-2"
          >
            Do you have a current driving license and the use of a car?
          </label>
          <select
            id="drivingLicense"
            {...register("drivingLicense")}
            className="w-full p-2 rounded-md border"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* External Events Field */}
        <div className="mb-4">
          <label
            htmlFor="externalEvents"
            className="block text-sm font-medium mb-2"
          >
            Are you able to help at external fundraising events such as bag
            packing, bucket collections, summers fairs and ball etc?
          </label>
          <select
            id="externalEvents"
            {...register("externalEvents")}
            className="w-full p-2 rounded-md border"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-start gap-x-2">
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
          >
            {loading ? "Loading ..." : "Submit"}
          </button>
          {message && <div className="text-lg mt-4">{message}!</div>}
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
