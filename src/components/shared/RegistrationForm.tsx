import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
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
        "https://api.waamoreliefdevelopment.org/public/api/user/register",
        data
      )
      .then(() => {
        // console.log("Data successfully sent:", response.data);
        setMessage("Successfully Submitted Form");
        setLoading(false);
        reset();
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch(() => {
        // console.error("Error sending data:", error);
        setMessage("Error Submitting Form ! Try Again ");
        setLoading(false);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      });

    // Reset the form after submitting
  };

  return (
    <div className=" container ">
      {/* Big Image at the top */}
      <img
        src="/assets/images/hands.webp"
        alt="Descriptive alt text"
        className="w-full h-64 object-cover mb-4"
      />

      {/* Heading */}
      <div className="max-w-2xl mx-auto px-8 py-4">
        <h1 className="items-center text-4xl font-bold text-center mb-8">
          Registration Form
        </h1>

        <p className="mb-8">
          We make a lot of effort to help achieve the global poverty rate
          decline, support education for children living in poor families.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Name"
            />
            {errors.name && typeof errors.name.message === "string" && (
              <span className="text-red-500 text-sm">
                {errors.name.message as string}
              </span>
            )}
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
              placeholder="Email"
            />
            {errors.email && typeof errors.email.message === "string" && (
              <span className="text-red-500 text-sm">
                {errors.email.message as string}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "This field is required." })}
              className="w-full p-2 rounded-md border"
              placeholder="Phone"
            />
            {errors.phone && typeof errors.phone.message === "string" && (
              <span className="text-red-500 text-sm">
                {errors.phone.message as string}
              </span>
            )}
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium mb-2">
              Address *
            </label>
            <input
              type="text"
              id="address"
              {...register("adress", { required: "This field is required." })}
              className="w-full p-2 rounded-md border mb-2"
              placeholder="Address"
            />
            <input
              type="text"
              id="city"
              {...register("city", { required: "This field is required." })}
              className="w-full p-2 rounded-md border mb-2"
              placeholder="City"
            />
            <input
              type="text"
              id="state"
              {...register("state", { required: "This field is required." })}
              className="w-full p-2 rounded-md border"
              placeholder="State"
            />
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
    </div>
  );
};

export default RegistrationForm;
