import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Add your Web3Forms access key here
    formData.append("access_key", "81d3b660-4ad1-4763-a7a5-480ce9815808");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative lg:h-screen h-[150vh] lg:flex-row flex flex-col-reverse lg:flex justify-center items-center bg-white">
      <div className="px-[5%]">
        <div className="lg:grid lg:grid-cols-3 gap-20">
          {/* Left section for Business Queries */}
          <div className="col-span-1">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-textpink">
                For Business <br />
                Queries:
              </h2>
              <p className="text-lg mt-4">
                Let's collaborate and make music together! <br /> Text or email
                to us at:
              </p>
              <p className="mt-4 text-xl font-semibold text-textpink">Text:</p>
              <p className="text-lg">+91 98 76 54 32 10</p>
              <p className="mt-4 text-xl font-semibold text-textpink">Mail:</p>
              <p className="text-lg">Ishitavishwakarma@gmail.com</p>
            </div>
          </div>

          {/* Right section for Contact Form */}
          <div className="col-span-2 lg:translate-y-0 translate-y-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-textpink">
                Send Me A<br /> Message:
              </h2>
              <p className="text-lg mt-4">
                Alternatively, complete this form to provide more details about
                your project and needs. We will respond promptly. Share the
                love.
              </p>

              {/* Form starts here */}
              <form className="lg:mx-0 mt-8 space-y-4" onSubmit={onSubmit}>
                <div className="grid lg:grid-cols-3 gap-4 text-textpink">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="col-span-1 border-none bg-lightpink p-2 border rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="col-span-1 text-pink border-none bg-lightpink p-2 border rounded-lg"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Number"
                    className="col-span-1 p-2 border-none bg-lightpink border rounded-lg"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-2 border border-none bg-lightpink rounded-lg h-32"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-red border-none text-white px-6 py-2 rounded-lg"
                >
                  Send Message
                </button>
              </form>
              <span className="text-green-500 mt-4">{result}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full text-center py-4">
        <p className="text-textpink">Copyright © 2024 All rights reserved by IV</p>
      </footer>
    </div>
  );
};

export default ContactForm;
