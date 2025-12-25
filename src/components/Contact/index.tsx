"use client";

import { Button, Loader } from "@mantine/core";
import NewsLatterBox from "./NewsLetterBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const Contact: React.FC<{ showNewsLetterSignUp?: boolean }> = ({
  showNewsLetterSignUp = true,
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean | undefined>();

  const sendEmail = async (formdata: any) => {
    console.log({ isLoading });
    const senderName = formdata.get("name");
    const senderEmail = formdata.get("email");
    const senderMessage = formdata.get("message");

    const emailDetails = JSON.stringify({
      name: senderName,
      email: senderEmail,
      message: senderMessage,
    });

    try {
      const response = await fetch(
        "https://sendemail-doctorai.azurewebsites.net/api/sendemail?code=-EH4H4t30FS5pZoxRHteBAW8JlU-NBeQoJEiwN371fkmAzFuNPNvIw%3D%3D",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: emailDetails,
        },
      );

      if (response.ok || response.status === 200) {
        toast.success("email submitted, Thank you");
        const data = await response.text();
        setIsLoading(false);
        console.log({ isLoading });
        return data;
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("There was an error");
      console.error("Error:", error);
      setIsLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-10"

    >
      <div className="full-width md:px-12">
        <div
          className={`-mx-4 flex flex-wrap ${!showNewsLetterSignUp ? "items-center justify-center" : ""}`}
        >
          {!isLoading && (
            <div className={`px-4 lg:w-7/12 xl:w-8/12`}>
              <div
                className="b mb-12 rounded-sm bg-white px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
              "
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Let’s Start a Conversation!
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  We’d love to hear from you! Whether you have questions about
                  our services, need assistance with a project, or want to
                  discuss how we can help your business grow, our team is here
                  to assist you. Reach out to us through the form below.
                </p>

                <form
                  action={(data) => {
                    sendEmail(data);
                    setIsLoading(true);
                  }}
                >
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          placeholder="Enter your name"
                          className="dark:text-body-color-dark w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="dark:text-body-color-dark w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="dark:text-body-color-dark w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <Button className="button-primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {isLoading && (
            <>
              <section className="flex-column flex w-full items-center justify-center">
                <Loader />
              </section>
              <p className="d-block mt-8 text-white">sending message...</p>
            </>
          )}

          {showNewsLetterSignUp && (
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
