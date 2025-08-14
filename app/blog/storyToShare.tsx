"use client";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_SETTINGS } from "@/lib/queries";
import { uploadToCloudinary } from "@/lib/cloudinary-client";

const StoryToShare = () => {
  const { loading, error, data } = useQuery(GET_BLOG_SETTINGS);

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    blogTitle: "",
    blogContent: "",
    uploadDocument: null as File | null,
    tags: "",
    authorBio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Validation states
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    blogTitle: "",
    blogContent: "",
    tags: "",
    authorBio: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    blogTitle: false,
    blogContent: false,
    tags: false,
    authorBio: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateField = (name: string, value: string) => {
    let message = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          message = "Name is required";
        } else if (value.trim().length < 2) {
          message = "Name must be at least 2 characters long";
        }
        break;
      case "email":
        if (!value.trim()) {
          message = "Email address is required";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            message = "Please enter a valid email address";
          }
        }
        break;
      case "blogTitle":
        if (!value.trim()) {
          message = "Blog title is required";
        } else if (value.trim().length < 5) {
          message = "Blog title must be at least 5 characters long";
        }
        break;
      case "blogContent":
        if (!value.trim()) {
          message = "Blog content is required";
        } else if (value.trim().length < 20) {
          message = "Blog content must be at least 20 characters long";
        }
        break;
      case "tags":
        if (!value.trim()) {
          message = "Tags are required";
        } else if (value.trim().length < 3) {
          message = "Tags must be at least 3 characters long";
        }
        break;
      case "authorBio":
        if (!value.trim()) {
          message = "Author bio is required";
        } else if (value.trim().length < 10) {
          message = "Author bio must be at least 10 characters long";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
    return message === "";
  };

  const validateForm = () => {
    const nameValid = validateField("name", form.name);
    const emailValid = validateField("email", form.email);
    const blogTitleValid = validateField("blogTitle", form.blogTitle);
    const blogContentValid = validateField("blogContent", form.blogContent);
    const tagsValid = validateField("tags", form.tags);
    const authorBioValid = validateField("authorBio", form.authorBio);

    return (
      nameValid &&
      emailValid &&
      blogTitleValid &&
      blogContentValid &&
      tagsValid &&
      authorBioValid
    );
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    setSubmitMessage(""); // Clear message when popup is opened
    // Reset validation states
    setErrors({
      name: "",
      email: "",
      blogTitle: "",
      blogContent: "",
      tags: "",
      authorBio: "",
    });
    setTouched({
      name: false,
      email: false,
      blogTitle: false,
      blogContent: false,
      tags: false,
      authorBio: false,
    });
    setIsSubmitted(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSubmitMessage(""); // Clear message when popup is closed
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Validate field if it's been touched
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleFieldBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const value = form[name as keyof typeof form];
    if (typeof value === "string") {
      validateField(name, value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (file.size > maxSize) {
        alert("File size must be less than 5MB");
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        alert("Please upload only PDF or DOC files");
        return;
      }

      setForm({ ...form, uploadDocument: file });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      blogTitle: true,
      blogContent: true,
      tags: true,
      authorBio: true,
    });

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Upload file to Cloudinary if uploaded
      let cloudinaryUrl: string | null = null;
      if (form.uploadDocument) {
        try {
          cloudinaryUrl = await uploadToCloudinary(form.uploadDocument, "blog");
          console.log("File uploaded to Cloudinary:", cloudinaryUrl);
        } catch (uploadError) {
          console.error("Cloudinary upload failed:", uploadError);
          setSubmitMessage("Error uploading file. Please try again.");
          return;
        }
      }

      // Build the fields object as per WPForms API (same structure as FAQ form)
      const fields: any = {
        1: {
          name: "Name",
          value: form.name,
          id: 1,
          type: "text",
        },
        2: {
          name: "Email",
          value: form.email,
          id: 2,
          type: "email",
        },
        3: {
          name: "Blog Title",
          value: form.blogTitle,
          id: 3,
          type: "text",
        },
        4: {
          name: "Blog Content",
          value: form.blogContent,
          id: 4,
          type: "textarea",
        },
        6: {
          name: "Tags",
          value: form.tags,
          id: 6,
          type: "text",
        },
        7: {
          name: "Author Bio",
          value: form.authorBio,
          id: 7,
          type: "textarea",
        },
      };

      // Add file information if uploaded
      if (form.uploadDocument && cloudinaryUrl) {
        fields[5] = {
          name: "Upload Document",
          value: form.uploadDocument.name || "Document uploaded",
          id: 5,
          type: "file",
          file_url: cloudinaryUrl,
        };
      }

      const payload = {
        form_id: 1260,
        fields,
      };

      // Using fetch instead of axios to avoid dependency issues
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT_URL}/wp-json/custom/v1/submit-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Reset form on success
      setForm({
        name: "",
        email: "",
        blogTitle: "",
        blogContent: "",
        uploadDocument: null,
        tags: "",
        authorBio: "",
      });
      setSubmitMessage("Form submitted successfully!");
      setIsSubmitted(true);

      // Reset validation states
      setTouched({
        name: false,
        email: false,
        blogTitle: false,
        blogContent: false,
        tags: false,
        authorBio: false,
      });

      // Close popup after successful submission
      setTimeout(() => {
        closePopup();
        setIsSubmitted(false);
      }, 2000);
    } catch (error: any) {
      console.error("Form submission error:", error);
      setSubmitMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading Story to Share data</div>;

  const techStory = data?.page?.blogSettings?.techStory;

  return (
    <>
      <section className="pt-[120px] pb-[107px]">
        <div className="container max-w-[1400px] px-[20px] mx-auto w-full">
          <div className="flex flex-col items-center justify-center gap-[16px] 2xl:mb-[60px] xl:mb-[60px] lg:mb-[50px] md:mb-[40px] sm:mb-[30px] mb-[60px]">
            <h2 className="h2 text-white text-center">{techStory?.title}</h2>
            <p className="font-lato font-normal text-[17px] leading-[26px] text-[#C3C3C3] text-center max-w-[1000px]">
              {techStory?.description}
            </p>
          </div>
          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 2xl:gap-[60px] xl:gap-[60px] lg:gap-[40px] md:gap-[30px] sm:gap-[20px] gap-[20px]">
            {techStory?.cards?.map((card: any, index: number) => (
              <div
                key={index}
                className="bg-[#FFFF]/10 2xl:py-[60px] xl:py-[60px] lg:py-[50px] md:py-[40px] sm:py-[30px] py-[20px] 2xl:px-[65px] xl:px-[65px] lg:px-[50px] md:px-[40px] sm:px-[40px] px-[40px] backdrop-blur-sm rounded-[16px]"
              >
                <div className="flex flex-col items-center justify-center 2xl:gap-[50px] xl:gap-[50px] lg:gap-[40px] md:gap-[30px] sm:gap-[20px] gap-[20px]">
                  <div className="flex flex-col items-center justify-center gap-[7px]">
                    <h4 className="font-denton 2xl:text-[34px] xl:text-[34px] lg:text-[30px] md:text-[25px] sm:text-[25px] text-[20px] text-white 2xl:leading-[45px] xl:leading-[45px] lg:leading-[40px] md:leading-[30px] sm:leading-[30px]leading-[30px] font-bold text-center">
                      {card.title}
                    </h4>
                    <p className="font-lato font-normal text-[17px] leading-[26px] text-center text-[#C3C3C3]">
                      {card.description}
                    </p>
                  </div>
                  <button onClick={openPopup} className="inline-block group">
                    <div className="btn-primary-outline">
                      <div className="btn-primary 2xl:px-[40px] xl:px-[40px] lg:px-[30px] md:px-[30px] sm:px-[20px] px-[20px]">
                        {card.buttonLink?.title}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999999]">
          <div className="min-h-screen px-4 sm:px-6 md:px-10 flex justify-center items-center">
            <div className="w-full max-w-[1400px] 2xl:pt-[80px] xl:pt-[80px] lg:pt-[60px] md:pt-[50px] sm:pt-[40px] pt-[20px] 2xl:pb-[100px] xl:pb-[100px] lg:pb-[6px] md:pb-[50px] sm:pb-[40px] pb-[20px] 2xl:px-[130px] xl:px-[130px] lg:px-[60px] md:px-[50px] sm:px-[40px] px-[20px] bg-[#292929] rounded-[20px] mx-auto max-h-[90vh] overflow-y-auto relative custom-scrollbar">
              <button
                onClick={closePopup}
                className="absolute lg:top-[40px] lg:right-[40px] top-[20px] right-[5px] z-20 w-[43.84px] h-[43.84px] rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M10.9603 10.9601C11.7413 10.1791 12.905 10.0764 13.5594 10.7308L33.1099 30.2813C33.7643 30.9357 33.6617 32.0994 32.8806 32.8804C32.0996 33.6615 30.9359 33.7641 30.2815 33.1098L10.731 13.5592C10.0766 12.9048 10.1792 11.7412 10.9603 10.9601Z"
                      fill="#E72125"
                    ></path>
                    <path
                      d="M32.8802 10.9598C33.6613 11.7409 33.7639 12.9045 33.1096 13.5589L13.559 33.1094C12.9046 33.7638 11.741 33.6612 10.9599 32.8801C10.1789 32.0991 10.0762 30.9354 10.7306 30.281L30.2811 10.7305C30.9355 10.0761 32.0992 10.1788 32.8802 10.9598Z"
                      fill="#E72125"
                    ></path>
                  </g>
                </svg>
              </button>
              <div className="flex flex-col gap-[16px] items-center justify-center 2xl:mb-[50px] xl:mb-[50px] lg:mb-[40px] md:mb-[30px] sm:mb-[20px] mb-[20px]">
                <h2 className="font-denton font-bold 2xl:text-[66px] xl:text-[66px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[30px] 2xl:leading-[87px] xl:leading-[87px] lg:leading-[60px] md:leading-[55px] sm:leading-[35px] leading-[40px] text-center text-white">
                  Get Featured on Our Blog
                </h2>
                <p className="font-lato font-normal text-[17px] leading-[26px] text-[#C3C3C3]">
                  Share your original content and reach a wider audience.
                </p>
              </div>
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col items-center justify-center gap-[30px] w-full"
              >
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-[20px] w-full">
                  <div className="flex flex-col items-start gap-[16px]">
                    <label className="font-lato font-normal text-[17px] leading-[100%] text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={form.name}
                      onChange={handleFormChange}
                      onBlur={() => handleFieldBlur("name")}
                      className="rounded-[6px] py-[10px] px-[20px] text-left font-lato font-medium text-white text-[17px] leading-[20px] bg-[#D9D9D9]/20 w-full focus:bg-[#D9D9D9]/20 focus:border-transparent focus:outline-none focus:ring-0 autofill:bg-transparent placeholder:text-[#E9E9E9]"
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-400 text-[14px] font-lato">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-[16px]">
                    <label className="font-lato font-normal text-[17px] leading-[100%] text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Your email"
                      value={form.email}
                      onChange={handleFormChange}
                      onBlur={() => handleFieldBlur("email")}
                      className="rounded-[6px] py-[10px] px-[20px] text-left font-lato font-medium text-white text-[17px] leading-[20px] bg-[#D9D9D9]/20 w-full focus:bg-[#D9D9D9]/20 focus:border-transparent focus:outline-none focus:ring-0 autofill:bg-transparent placeholder:text-[#E9E9E9]"
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-400 text-[14px] font-lato">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-[16px]">
                    <label className="font-lato font-normal text-[17px] leading-[100%] text-white">
                      Blog title
                    </label>
                    <input
                      type="text"
                      name="blogTitle"
                      placeholder="Enter blog title"
                      value={form.blogTitle}
                      onChange={handleFormChange}
                      onBlur={() => handleFieldBlur("blogTitle")}
                      className="rounded-[6px] py-[10px] px-[20px] text-left font-lato font-medium text-white text-[17px] leading-[20px] bg-[#D9D9D9]/20 w-full focus:bg-[#D9D9D9]/20 focus:border-transparent focus:outline-none focus:ring-0 autofill:bg-transparent placeholder:text-[#E9E9E9]"
                    />
                    {touched.blogTitle && errors.blogTitle && (
                      <p className="text-red-400 text-[14px] font-lato">
                        {errors.blogTitle}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-[16px]">
                    <label className="font-lato font-normal text-[17px] leading-[100%] text-white">
                      Blog Content
                    </label>
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-[10px] w-full">
                      <input
                        type="text"
                        name="blogContent"
                        placeholder="Enter Blog Content"
                        value={form.blogContent}
                        onChange={handleFormChange}
                        onBlur={() => handleFieldBlur("blogContent")}
                        className="rounded-[6px] py-[10px] px-[20px] text-left font-lato font-medium text-white text-[17px] leading-[20px] bg-[#D9D9D9]/20 w-full focus:bg-[#D9D9D9]/20 focus:border-transparent focus:outline-none focus:ring-0 autofill:bg-transparent placeholder:text-[#E9E9E9] w-full"
                      />
                      <label className="flex items-center justify-between w-full py-[10px] px-[20px] rounded-[6px] border border-dashed border-[#FFFFFF66] text-white cursor-pointer transition focus:bg-[#D9D9D9]/20 bg-[#D9D9D9]/20">
                        <span>
                          {form.uploadDocument
                            ? form.uploadDocument.name
                            : "Upload Document"}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M20 17.2727V13.6364C20 13.3953 19.9122 13.164 19.7559 12.9935C19.5996 12.8231 19.3877 12.7273 19.1667 12.7273C18.9457 12.7273 18.7337 12.8231 18.5774 12.9935C18.4211 13.164 18.3333 13.3953 18.3333 13.6364V17.2727C18.3333 17.5138 18.2455 17.7451 18.0893 17.9156C17.933 18.086 17.721 18.1818 17.5 18.1818H2.5C2.27899 18.1818 2.06702 18.086 1.91074 17.9156C1.75446 17.7451 1.66667 17.5138 1.66667 17.2727V13.6364C1.66667 13.3953 1.57887 13.164 1.42259 12.9935C1.26631 12.8231 1.05435 12.7273 0.833333 12.7273C0.61232 12.7273 0.400358 12.8231 0.244078 12.9935C0.0877975 13.164 0 13.3953 0 13.6364V17.2727C0 17.996 0.263392 18.6897 0.732233 19.2012C1.20107 19.7127 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7127 19.2678 19.2012C19.7366 18.6897 20 17.996 20 17.2727ZM14.6833 12.5273L10.5167 16.1636C10.3695 16.2905 10.1875 16.3595 10 16.3595C9.81249 16.3595 9.63046 16.2905 9.48333 16.1636L5.31667 12.5273C5.16485 12.3709 5.07235 12.1581 5.05747 11.931C5.0426 11.7038 5.10643 11.4788 5.23633 11.3005C5.36624 11.1222 5.55276 11.0036 5.75899 10.9682C5.96522 10.9327 6.17613 10.983 6.35 11.1091L9.16667 13.5636V0.909091C9.16667 0.667985 9.25446 0.436754 9.41074 0.266267C9.56702 0.0957791 9.77899 0 10 0C10.221 0 10.433 0.0957791 10.5893 0.266267C10.7455 0.436754 10.8333 0.667985 10.8333 0.909091V13.5636L13.65 11.1091C13.7339 11.0227 13.8334 10.9562 13.9421 10.9139C14.0507 10.8716 14.1663 10.8544 14.2814 10.8634C14.3965 10.8724 14.5086 10.9073 14.6107 10.966C14.7128 11.0248 14.8026 11.106 14.8744 11.2045C14.9462 11.3031 14.9984 11.4168 15.0278 11.5385C15.0572 11.6603 15.0632 11.7873 15.0452 11.9117C15.0272 12.036 14.9858 12.1549 14.9235 12.2609C14.8612 12.3669 14.7794 12.4576 14.6833 12.5273Z"
                            fill="white"
                          />
                        </svg>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {touched.blogContent && errors.blogContent && (
                      <p className="text-red-400 text-[14px] font-lato">
                        {errors.blogContent}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-[16px]">
                    <label className="font-lato font-normal text-[17px] leading-[100%] text-white">
                      Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      placeholder="Enter blog tags"
                      value={form.tags}
                      onChange={handleFormChange}
                      onBlur={() => handleFieldBlur("tags")}
                      className="rounded-[6px] py-[10px] px-[20px] text-left font-lato font-medium text-white text-[17px] leading-[20px] bg-[#D9D9D9]/20 w-full focus:bg-[#D9D9D9]/20 focus:border-transparent focus:outline-none focus:ring-0 autofill:bg-transparent placeholder:text-[#E9E9E9]"
                    />
                    {touched.tags && errors.tags && (
                      <p className="text-red-400 text-[14px] font-lato">
                        {errors.tags}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start gap-[16px]">
                    <label className="font-lato font-normal text-[17px] leading-[100%] text-white">
                      Author Bio
                    </label>
                    <input
                      type="text"
                      name="authorBio"
                      placeholder="Enter Author Bio"
                      value={form.authorBio}
                      onChange={handleFormChange}
                      onBlur={() => handleFieldBlur("authorBio")}
                      className="rounded-[6px] py-[10px] px-[20px] text-left font-lato font-medium text-white text-[17px] leading-[20px] bg-[#D9D9D9]/20 w-full focus:bg-[#D9D9D9]/20 focus:border-transparent focus:outline-none focus:ring-0 autofill:bg-transparent placeholder:text-[#E9E9E9]"
                    />
                    {touched.authorBio && errors.authorBio && (
                      <p className="text-red-400 text-[14px] font-lato">
                        {errors.authorBio}
                      </p>
                    )}
                  </div>
                </div>
                {submitMessage && (
                  <div
                    className={`text-center text-[17px] font-lato ${
                      submitMessage.includes("Error")
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_153.5%)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoryToShare;
