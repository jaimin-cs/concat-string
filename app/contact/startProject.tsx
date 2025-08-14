"use client";
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { GET_CONTACT_US } from "@/lib/queries";
// Type definitions
interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "textarea" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
}

interface FormStep {
  id: string;
  title: string;
  fields?: FormField[];
  type?: "radio" | "file" | "textarea" | "multiselect";
  options?: string[];
  otherField?: boolean;
  description?: string;
  required?: boolean;
}

interface FormData {
  [key: string]: any;
}

type FormType = "startProject" | "joinTeam" | "dropLine" | null;

const MultiStepForm = () => {
  const { data } = useQuery(GET_CONTACT_US);
  const [currentStep, setCurrentStep] = useState(0);
  const [formType, setFormType] = useState<FormType>(null);
  const [formData, setFormData] = useState<FormData>({});

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Extract the first block with contactTitle and contactUsDescription
  const contactBlock = data?.page?.flexibleContent?.flexibleContent?.find(
    (block: any) =>
      block?.contactTitle &&
      block?.contactUsDescription &&
      block?.joinOurTeamLink
  );

  // Form steps configuration
  const formSteps: Record<string, FormStep[]> = {
    startProject: [
      {
        id: "contact-info",
        title: "Contact Information",
        fields: [
          {
            name: "fullName",
            label: "Full name",
            type: "text",
            required: true,
          },
          {
            name: "email",
            label: "Email address",
            type: "email",
            required: true,
          },
          {
            name: "phone",
            label: "Phone number",
            type: "number",
            required: true,
          },
          {
            name: "agencyName",
            label: "Agency name",
            type: "text",
            required: true,
          },
        ],
      },
      {
        id: "project-details",
        title: "Project Details",
        fields: [
          {
            name: "projectTitle",
            label: "Project title",
            type: "textarea",
            required: true,
          },
          {
            name: "projectDescription",
            label: "Project description",
            type: "textarea",
            required: true,
            placeholder:
              "Tell us what you're building or what problem you're solving.",
          },
        ],
      },
      {
        id: "projectType",
        title: "What type of project?",
        type: "multiselect",
        options: [
          "Web Development",
          "Mobile App Development",
          "UI/UX Design",
          "Backend/API Development",
          "Product Strategy / Consulting",
          "Maintenance & Support",
          "Other",
        ],
        otherField: true,
      },
      {
        id: "budget",
        title: "What is the budget for the project?",
        type: "radio",
        options: [
          "<$5,000",
          "$5,000 – $10,000",
          "$10,000 – $25,000",
          "$25,000 – $50,000",
          "$50,000+",
          "Not sure yet",
        ],
      },
      {
        id: "timeline",
        title: "Project Timeline",
        type: "radio",
        options: [
          "ASAP",
          "1–3 months",
          "3–6 months",
          "Flexible",
          "Not sure yet",
        ],
      },
      {
        id: "attachments",
        title: "Attachments",
        type: "file",
        description: "Upload a brief, wireframe, or spec (PDF, doc, etc.)",
      },
      {
        id: "referral",
        title: "How did you hear about us?",
        type: "radio",
        options: ["Google", "LinkedIn", "Referral", "Close friend", "Other"],
        otherField: true,
      },
      {
        id: "additionalNotes",
        title: "Additional Notes / Questions",
        type: "textarea",
        required: true,
      },
    ],
    joinTeam: [
      {
        id: "contact-info",
        title: "Contact Information",
        fields: [
          {
            name: "fullName",
            label: "Full name",
            type: "text",
            required: true,
          },
          {
            name: "email",
            label: "Email address",
            type: "email",
            required: true,
          },
          {
            name: "phone",
            label: "Phone number",
            type: "number",
            required: false,
          },
          {
            name: "agencyName",
            label: "Agency name",
            type: "text",
            required: true,
          },
        ],
      },
    ],
    dropLine: [
      {
        id: "contact-info",
        title: "Contact Information",
        fields: [
          {
            name: "fullName",
            label: "Full name",
            type: "text",
            required: true,
          },
          { name: "email", label: "Email", type: "email", required: true },
          {
            name: "phone",
            label: "Phone number",
            type: "number",
            required: true,
          },
          {
            name: "enquiryType",
            label: "Enquiry type",
            type: "select",
            required: true,
            options: [
              "General Question",
              "New Project Inquiry",
              "Partnership Opportunity",
              "Support Request",
              "Other",
            ],
          },
          {
            name: "message",
            label: "Your message",
            type: "textarea",
            required: true,
          },
        ],
      },
    ],
  };

  const handleFormTypeSelect = (type: FormType) => {
    setFormType(type);
    setCurrentStep(0);

    // Initialize form data for multiselect fields
    if (type === "startProject") {
      const initialData: FormData = {};
      formSteps[type].forEach((step) => {
        if (step.type === "multiselect") {
          initialData[step.id] = [];
        }
      });
      setFormData(initialData);
    } else {
      setFormData({});
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (touched[field]) {
      validateField(field, value);
    }
  };

  const validateStep = (step: number) => {
    if (!formType) return false;

    const steps = formSteps[formType];
    if (!steps || step >= steps.length) return false;

    const currentStepData = steps[step];
    if (!currentStepData) return false;

    if (currentStepData.fields) {
      return currentStepData.fields.every((field) => {
        const value = formData[field.name]?.trim?.() || "";

        if (field.required && !value) {
          return false;
        }

        // Email validation
        if (field.type === "email" && value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            return false;
          }
        }

        // Phone number validation (basic 10-digit, adjust if needed)
        if (field.type === "number" && value) {
          const phoneRegex = /^[0-9]{1,15}$/;
          if (!phoneRegex.test(value)) {
            return false;
          }
        }

        return true;
      });
    }

    if (currentStepData.type === "radio") {
      return formData[currentStepData.id] !== undefined;
    }

    if (currentStepData.type === "multiselect") {
      const selectedValues = formData[currentStepData.id];
      return Array.isArray(selectedValues) && selectedValues.length > 0;
    }

    return true;
  };

  const canGoNext = () => {
    return validateStep(currentStep);
  };

  const canGoBack = () => {
    return currentStep > 0;
  };

  const handleNext = () => {
    if (canGoNext()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (canGoBack()) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // console.log('Form submitted:', formData);
    // console.log('Form type:', formType);
    // return false
    if (!formType) return false;
    e.preventDefault();
    setIsSubmitting(true);
    let fields = {};
    let formId = 0;
    if (formType === "dropLine") {
      formId = 1841;
      fields = {
        6: {
          name: "How can we help?",
          value: formData.enquiryType,
          id: "6",
          type: "radio",
        },
        1: {
          name: "Full Name",
          value: formData.fullName,
          id: 1,
          type: "name",
        },
        2: {
          name: "Email",
          value: formData.email,
          id: 2,
          type: "textarea",
        },
        3: {
          name: "Phone",
          value: formData.phone || "",
          id: 3,
          type: "phone",
        },
        4: {
          name: "Enquiry",
          value: formData.enquiryType,
          id: 4,
          type: "select",
        },
        5: {
          name: "Message",
          value: formData.message,
          id: 5,
          type: "seletextareact",
        },
      };
    } else if (formType === "startProject") {
      formId = 1838;
      fields = {
        1: {
          name: "How can we help?",
          value: "Start a Project",
          id: 1,
          type: "radio",
        },
        5: {
          name: "Name",
          value: formData.fullName,
          id: 5,
          type: "name",
        },
        6: {
          name: "Email",
          value: formData.email,
          id: 6,
          type: "email",
        },
        7: {
          name: "Phone",
          value: formData.phone || "",
          id: 7,
          type: "phone",
        },
        8: {
          name: "Agency Name",
          value: formData.agencyName,
          id: 8,
          type: "text",
        },
        10: {
          name: "Project Title",
          value: formData.projectTitle,
          id: 10,
          type: "textarea",
        },
        11: {
          name: "Project Brief",
          value: formData.projectDescription,
          id: 11,
          type: "textarea",
        },
        13: {
          name: "What type of project?",
          value: formData.projectType.join(", "),
          id: 13,
          type: "checkbox",
        },
        15: {
          name: "What is the budget for the project?",
          value: formData.budget,
          id: 15,
          type: "radio",
        },
        16: {
          name: "Project Timeline",
          value: formData.timeline,
          id: 16,
          type: "checkbox",
        },
        19: {
          name: "Attatchment",
          value: "",
          id: 19,
          type: "file-upload",
        },
        21: {
          name: "How did you hear about us?",
          value: formData.referral,
          id: 21,
          type: "radio",
        },
        23: {
          name: "Additional Notes / Questions",
          value: formData.additionalNotes || "",
          id: 23,
          type: "radio",
        },
      };
    }

    const payload = {
      form_id: formId,
      fields,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT_URL}/wp-json/custom/v1/submit-form`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        }
      );
    } catch (error: any) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name] || "");
  };

  const validateField = (name: string, value: string) => {
    let message = "";

    if (!formType) return false;

    const field = formSteps[formType]
      ?.flatMap((step) => step.fields || [])
      ?.find((f) => f.name === name);
    if (field) {
      if (field.required && !value.trim()) {
        message = `${field.label || name} is required`;
      } else if (field.type === "email" && value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          message = "Please enter a valid email address";
        }
      } else if (field.type === "number" && value.trim()) {
        const phoneRegex = /^[0-9]{1,15}$/;
        if (!phoneRegex.test(value)) {
          message = "Please enter a valid phone number";
        }
      }
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const renderField = (field: FormField) => {
    const error = touched[field.name] ? errors[field.name] : "";

    switch (field.type) {
      case "text":
      case "email":
      case "number":
        return (
          <div>
            <input
              type={field.type}
              placeholder={field.label + (field.required ? "*" : "")}
              required={field.required}
              value={formData[field.name] || ""}
              onBlur={() => handleBlur(field.name)}
              onChange={(e) => {
                let value = e.target.value;
                if (field.name === "phone") {
                  value = value.replace(/\D/g, "");
                  if (value.length > 15) value = value.slice(0, 15);
                }
                handleInputChange(field.name, value);
              }}
              // onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="w-full h-[60px] px-[20px] py-[15px] rounded-[12px] border border-[#FFFFFF70] bg-transparent text-white font-monte font-medium text-[16px] leading-[24px] placeholder:text-white/70 focus:bg-[#D9D9D94D] !focus:border-0 focus:outline-none focus:ring-0 transition-all duration-300"
            />
            {error && <p className="font-denton mt-1 text-red-400 text-sm">{error}</p>}
          </div>
        );
      case "textarea":
        return (
          <div>
            <textarea
              placeholder={
                field.placeholder || field.label + (field.required ? "*" : "")
              }
              required={field.required}
              value={formData[field.name] || ""}
              onBlur={() => handleBlur(field.name)}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="w-full min-h-[120px] px-[20px] py-[15px] rounded-[12px] border border-[#FFFFFF70] bg-transparent text-white font-monte font-medium text-[16px] leading-[24px] placeholder:text-white/70 focus:bg-[#D9D9D94D] !focus:border-0 focus:outline-none focus:ring-0 transition-all duration-300 resize-none"
            />
            {error && <p className="font-denton mt-1 text-red-400 text-sm">{error}</p>}
          </div>
        );
      case "select":
        return (
          <select
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
            className="w-full h-[60px] px-[20px] py-[15px] rounded-[12px] border border-[#FFFFFF70] bg-transparent text-white font-monte font-medium text-[16px] leading-[24px] focus:bg-[#D9D9D94D] !focus:border-0 focus:outline-none focus:ring-0 transition-all duration-300 appearance-none"
          >
            <option
              value=""
              className="font-monte font-medium text-white leading-[24px] bg-[#2B2B2B]"
            >
              {field.label}
            </option>
            {field.options?.map((option, index) => (
              <option
                key={index}
                value={option}
                className="font-monte font-medium text-white leading-[24px] bg-[#2B2B2B]"
              >
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  const renderRadioOptions = (step: FormStep) => {
    return (
      <div className="flex items-center justify-center w-full flex-row flex-wrap 2xl:gap-[30px] xl:gap-[30px] lg:gap-[25px] mb:gap-[20px] sm:gap-[20px] gap-[20px] 2xl:mb-[0px] xl:mb-[0px] lg:mb-[0px] md:mb-[10px] sm:mb-[15px] mb-[15px]">
        {step.options?.map((option, index) => (
          <div
            key={index}
            className="p-[1px] rounded-full bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] 2xl:w-[260px] xl:w-[260px] lg:w-[260px] md:w-full sm:w-full w-full cursor-pointer"
          >
            <div
              className={`flex items-center justify-center rounded-full p-[20px] 2xl:w-[258px] xl:w-[258px] lg:w-[258px] md:w-full sm:w-full w-full cursor-pointer transition-all duration-300 ${formData[step.id] === option
                ? "bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)]"
                : "bg-[#2B2B2B] hover:bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)]"
                }`}
              onClick={() => handleInputChange(step.id, option)}
            >
              <input
                type="radio"
                name={step.id}
                id={`${step.id}-${index}`}
                className="hidden"
                checked={formData[step.id] === option}
                onChange={() => handleInputChange(step.id, option)}
              />
              <label
                htmlFor={`${step.id}-${index}`}
                className="text-center text-white font-denton font-bold 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] leading-[100%] cursor-pointer"
              >
                {option}
              </label>
            </div>
          </div>
        ))}
        {step.otherField && formData[step.id] === "Other" && (
          <div className="w-full">
            <input
              type="text"
              placeholder="Please specify..."
              value={formData[`${step.id}Other`] || ""}
              onChange={(e) =>
                handleInputChange(`${step.id}Other`, e.target.value)
              }
              className="w-full h-[60px] px-[20px] py-[15px] rounded-[12px] border border-[#FFFFFF70] bg-transparent text-white font-monte font-medium text-[16px] leading-[24px] placeholder:text-white/70 focus:bg-[#D9D9D94D] !focus:border-0 focus:outline-none focus:ring-0 transition-all duration-300"
            />
          </div>
        )}
      </div>
    );
  };

  const renderMultiselect = (step: FormStep) => {
    const selectedValues = formData[step.id] || [];

    const handleOptionToggle = (option: string) => {
      const currentValues = Array.isArray(selectedValues) ? selectedValues : [];
      const newValues = currentValues.includes(option)
        ? currentValues.filter((val) => val !== option)
        : [...currentValues, option];

      handleInputChange(step.id, newValues);
    };

    return (
      <div className="w-full">
        <div className="flex items-center justify-center w-full flex-row flex-wrap 2xl:gap-[30px] xl:gap-[30px] lg:gap-[25px] mb:gap-[20px] sm:gap-[20px] gap-[20px] 2xl:mb-[0px] xl:mb-[0px] lg:mb-[0px] md:mb-[10px] sm:mb-[15px] mb-[15px]">
          {step.options?.map((option, index) => (
            <div
              key={index}
              className="p-[1px] rounded-full bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] 2xl:w-[260px] xl:w-[260px] lg:w-[260px] md:w-full sm:w-full w-full cursor-pointer"
            >
              <div
                className={`flex items-center justify-center rounded-full p-[20px] 2xl:w-[258px] xl:w-[258px] lg:w-[258px] md:w-full sm:w-full w-full cursor-pointer transition-all duration-300 ${selectedValues.includes(option)
                  ? "bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] text-white"
                  : "bg-[#2B2B2B] hover:bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] text-white"
                  }`}
                onClick={() => handleOptionToggle(option)}
              >
                <input
                  type="checkbox"
                  name={step.id}
                  id={`${step.id}-${index}`}
                  className="hidden"
                  checked={selectedValues.includes(option)}
                  onChange={() => handleOptionToggle(option)}
                />
                <span className="text-center font-denton font-bold 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] leading-[100%] cursor-pointer pointer-events-none">
                  {option}
                </span>
              </div>
            </div>
          ))}
        </div>
        {step.otherField && selectedValues.includes("Other") && (
          <div className="w-full">
            <input
              type="text"
              placeholder="Please specify..."
              value={formData[`${step.id}Other`] || ""}
              onChange={(e) =>
                handleInputChange(`${step.id}Other`, e.target.value)
              }
              className="w-full h-[60px] px-[20px] py-[15px] rounded-[12px] border border-[#FFFFFF70] bg-transparent text-white font-monte font-medium text-[16px] leading-[24px] placeholder:text-white/70 focus:bg-[#D9D9D94D] !focus:border-0 focus:outline-none focus:ring-0 transition-all duration-300"
            />
          </div>
        )}
      </div>
    );
  };

  const renderFileUpload = (step: FormStep) => {
    return (
      <div className="w-full flex justify-center">
        <div className="p-[1px] rounded-[20px] bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] w-full cursor-pointer">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center bg-[#2B2B2B] rounded-[20px] p-[30px] w-full hover:bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] cursor-pointer flex-col gap-[15px] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
            >
              <path
                d="M39.2727 31.0909V24.5455C39.2727 24.1115 39.1003 23.6952 38.7934 23.3884C38.4866 23.0815 38.0704 22.9091 37.6364 22.9091C37.2024 22.9091 36.7862 23.0815 36.4793 23.3884C36.1724 23.6952 36 24.1115 36 24.5455V31.0909C36 31.5249 35.8276 31.9411 35.5207 32.248C35.2138 32.5549 34.7976 32.7273 34.3636 32.7273H4.90909C4.4751 32.7273 4.05888 32.5549 3.75201 32.248C3.44513 31.9411 3.27273 31.5249 3.27273 31.0909V24.5455C3.27273 24.1115 3.10032 23.6952 2.79345 23.3884C2.48657 23.0815 2.07035 22.9091 1.63636 22.9091C1.20237 22.9091 0.786158 23.0815 0.47928 23.3884C0.172402 23.6952 0 24.1115 0 24.5455V31.0909C0 32.3929 0.517206 33.6415 1.43784 34.5622C2.35847 35.4828 3.60712 36 4.90909 36H34.3636C35.6656 36 36.9143 35.4828 37.8349 34.5622C38.7555 33.6415 39.2727 32.3929 39.2727 31.0909ZM28.8327 22.5491L20.6509 29.0945C20.362 29.3228 20.0046 29.447 19.6364 29.447C19.2682 29.447 18.9107 29.3228 18.6218 29.0945L10.44 22.5491C10.1419 22.2677 9.96025 21.8846 9.93104 21.4757C9.90182 21.0668 10.0272 20.6618 10.2823 20.3409C10.5373 20.02 10.9036 19.8065 11.3086 19.7427C11.7135 19.6789 12.1277 19.7694 12.4691 19.9964L18 24.4145V1.63636C18 1.20237 18.1724 0.786158 18.4793 0.47928C18.7862 0.172402 19.2024 0 19.6364 0C20.0704 0 20.4866 0.172402 20.7934 0.47928C21.1003 0.786158 21.2727 1.20237 21.2727 1.63636V24.4145L26.8036 19.9964C26.9684 19.8408 27.1637 19.7212 27.3771 19.6451C27.5905 19.5689 27.8175 19.538 28.0435 19.5541C28.2695 19.5703 28.4897 19.6332 28.6901 19.7389C28.8906 19.8446 29.0669 19.9907 29.2079 20.1681C29.3489 20.3455 29.4515 20.5502 29.5092 20.7693C29.567 20.9885 29.5786 21.2172 29.5433 21.441C29.508 21.6648 29.4267 21.8789 29.3043 22.0696C29.182 22.2604 29.0214 22.4237 28.8327 22.5491Z"
                fill="white"
              />
            </svg>
            <span className="font-lato font-normal text-[18px] leading-[24px] text-white text-center">
              {step.description}
            </span>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => handleInputChange("attachments", e.target.files)}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
        </div>
      </div>
    );
  };
  const renderStep = () => {
    if (!formType) {
      return (
        <div className="w-full">
          <div className="flex items-center justify-center w-full flex-row flex-wrap 2xl:gap-[30px] xl:gap-[30px] lg:gap-[25px] mb:gap-[20px] sm:gap-[20px] gap-[20px] 2xl:mb-[0px] xl:mb-[0px] lg:mb-[0px] md:mb-[10px] sm:mb-[15px] mb-[15px]">
            <div className="p-[1px] rounded-full bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] 2xl:w-[260px] xl:w-[260px] lg:w-[260px] md:w-full sm:w-full w-full cursor-pointer">
              <div
                className="flex items-center justify-center bg-[#2B2B2B] rounded-full 2xl:p-[20px] xl:p-[20px] lg:p-[20px] md:p-[15px] sm:p-[15px] p-[15px] 2xl:w-[258px] xl:w-[258px] lg:w-[258px] md:w-full sm:w-full w-full hover:bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] cursor-pointer"
                onClick={() => handleFormTypeSelect("startProject")}
              >
                <input
                  type="radio"
                  name="project-type"
                  id="start-project"
                  className="hidden"
                />
                <label
                  htmlFor="start-project"
                  className="text-center text-white font-denton font-bold text-[18px] leading-[100%]"
                >
                  Start a project
                </label>
              </div>
            </div>
            <div className="p-[1px] rounded-full bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] 2xl:w-[260px] xl:w-[260px] lg:w-[260px] md:w-full sm:w-full w-full cursor-pointer">
              <div
                className="flex items-center justify-center bg-[#2B2B2B] rounded-full 2xl:p-[20px] xl:p-[20px] lg:p-[20px] md:p-[15px] sm:p-[15px] p-[15px] 2xl:w-[258px] xl:w-[258px] lg:w-[258px] md:w-full sm:w-full w-full hover:bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] cursor-pointer"
                onClick={() =>
                  window.open(contactBlock?.joinOurTeamLink, "_blank")
                }
              >
                <input
                  type="radio"
                  name="project-type"
                  id="join"
                  className="hidden"
                />
                <label
                  htmlFor="join"
                  className="text-center text-white font-denton font-bold 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] leading-[100%]"
                >
                  Join our team
                </label>
              </div>
            </div>
            <div className="p-[1px] rounded-full bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] 2xl:w-[260px] xl:w-[260px] lg:w-[260px] md:w-full sm:w-full w-full cursor-pointer">
              <div
                className="flex items-center justify-center bg-[#2B2B2B] rounded-full 2xl:p-[20px] xl:p-[20px] lg:p-[20px] md:p-[15px] sm:p-[15px] p-[15px] 2xl:w-[258px] xl:w-[258px] lg:w-[258px] md:w-full sm:w-full w-full hover:bg-[linear-gradient(180deg,_#E72125_0%,_#8E1D1D_100%)] cursor-pointer"
                onClick={() => handleFormTypeSelect("dropLine")}
              >
                <input
                  type="radio"
                  name="project-type"
                  id="drop"
                  className="hidden"
                />
                <label
                  htmlFor="drop"
                  className="text-center text-white font-denton font-bold 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] leading-[100%]"
                >
                  Drop us a line
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const steps = formSteps[formType];
    const currentStepData = steps[currentStep];
    if (isSubmitted) {
      return (
        <div className="w-full text-center text-white">
          <h3 className="font-denton font-bold text-[40px] mb-[30px]">
            Thank you!
          </h3>
          <p className="font-lato text-[16px] mb-[30px]">
            Your submission has been received.
          </p>
          <button
            onClick={() => {
              setFormType(null);
              setCurrentStep(0);
              setFormData({});
              setIsSubmitted(false);
            }}
            className="px-[40px] py-[16px] rounded-full bg-gradient-to-b from-[#E72125] to-[#8E1D1D] text-white font-denton font-bold text-[18px] leading-[120%] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E72125] focus:ring-opacity-50 2xl:mb-[0px] xl:mb-[0px] lg:mb-[0px] md:mb-[10px] sm:mb-[15px] mb-[15px]"
          >
            Start Over
          </button>
        </div>
      );
    }

    return (
      <div className="w-full">
        <div className="w-full">
          {currentStepData.fields && (
            <div className="flex items-center justify-center w-full 2xl:gap-[30px] xl:gap-[30px] lg:gap-[25px] mb:gap-[20px] sm:gap-[20px] gap-[20px] flex-wrap">
              {currentStepData.fields.map((field, index) => (
                <div
                  key={index}
                  className={`${field.name === "message"
                    ? "w-full"
                    : "2xl:w-[calc(50%-25px)] xl:w-[calc(50%-25px)] lg:w-[calc(50%-25px)] md:w-[calc(50%-25px)] sm:w-full w-full"
                    }`}
                >
                  {renderField(field)}
                </div>
              ))}
            </div>
          )}

          {currentStepData.type === "radio" && (
            <div className="w-full">{renderRadioOptions(currentStepData)}</div>
          )}

          {currentStepData.type === "multiselect" && (
            <div className="w-full">{renderMultiselect(currentStepData)}</div>
          )}

          {currentStepData.type === "file" && (
            <div className="w-full">{renderFileUpload(currentStepData)}</div>
          )}

          {currentStepData.type === "textarea" && (
            <div className="w-full">
              <textarea
                placeholder={
                  currentStepData.title + (currentStepData.required ? "*" : "")
                }
                required={currentStepData.required}
                value={formData[currentStepData.id] || ""}
                onChange={(e) =>
                  handleInputChange(currentStepData.id, e.target.value)
                }
                className="w-full min-h-[120px] px-[20px] py-[15px] rounded-[12px] border border-[#FFFFFF70] bg-transparent text-white font-monte font-medium text-[16px] leading-[24px] placeholder:text-white/70 focus:bg-[#D9D9D94D] !focus:border-0 focus:outline-none focus:ring-0 transition-all duration-300 resize-none"
              />
            </div>
          )}

          <div className="w-full flex justify-center">
            {currentStep === steps.length - 1 ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canGoNext() || isSubmitting}
                className={`2xl:mb-[0px] xl:mb-[0px] lg:mb-[0px] md:mb-[10px] sm:mb-[15px] mb-[15px] mt-[30px] px-[40px] py-[16px] rounded-full bg-gradient-to-b from-[#E72125] to-[#8E1D1D] text-white font-denton font-bold text-[18px] leading-[120%] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E72125] focus:ring-opacity-50 ${!canGoNext()
                  ? "opacity-50 cursor-not-allowed hover:scale-100"
                  : ""
                  }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext()}
                className={`2xl:mb-[0px] xl:mb-[0px] lg:mb-[0px] md:mb-[10px] sm:mb-[15px] mb-[15px] mt-[30px] px-[40px] py-[16px] rounded-full bg-gradient-to-b from-[#E72125] to-[#8E1D1D] text-white font-denton font-bold text-[18px] leading-[120%] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E72125] focus:ring-opacity-50 ${!canGoNext()
                  ? "opacity-50 cursor-not-allowed hover:scale-100"
                  : ""
                  }`}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const getStepTitle = () => {
    if (!formType) return "How can we help?";

    const steps = formSteps[formType];
    const currentStepData = steps[currentStep];

    if (!currentStepData) return "Thank you!";

    return currentStepData.title;
  };

  const getStepNumber = () => {
    if (!formType) return "01/01";

    const steps = formSteps[formType];
    const currentStepNumber = currentStep + 1;
    const totalSteps = steps.length;

    return `${String(currentStepNumber).padStart(2, "0")}/${String(
      totalSteps
    ).padStart(2, "0")}`;
  };

  return (
    <section className="bg-[linear-gradient(358.24deg,_rgba(44,56,148,0)_-2.9%,_rgba(84,163,218,0.5)_98.71%)] py-[120px] pt-[200px] sm:pt-[200px] md:pt-[240px] lg:pt-[240px] xl:pt-[250px] 2xl:pt-[254px]">
      <div className="container max-w-[1640px] px-[20px] w-full mx-auto">
        <div className="flex flex-col items-center justify-center gap-[120px]">
          <div className="flex flex-col gap-[16px] items-center justify-center">
            <h2 className="h2 text-white text-center 2xl:leading-[120px] xl:leading-[120px] lg:leading-[100px] md:leading-[80px] sm:leading-[60px] leading-[50px]">
              {contactBlock?.contactTitle ||
                "Let's Build Something Great Together"}
            </h2>
            <p className="text-[#C3C3C3] font-lato text-[16px] leading-[26px] font-medium text-center">
              {contactBlock?.contactUsDescription ||
                "We're excited to hear about your ideas. Fill out the form below or reach out directly, and our team will get back to you shortly."}
            </p>
          </div>

          <div className="bg-[url('/images/contact/box-bg.png')] 2xl:px-[130px] xl:px-[130px] lg:px-[100px] md:px-[80px] sm:px-[50px] px-[30px] rounded-[34px] 2xl:h-[900px] xl:h-[900px] lg:h-[900px] md:h-full sm:h-full h-full 2xl:pb-[50px] xl:pb-[50px] lg:pb-[50px] md:pb-[50px] sm:pb-[60px] pb-[50px] 2xl:pt-[240px] xl:pt-[240px] lg:pt-[200px] md:pt-[150px] sm:pt-[100px] pt-[80px] w-full relative bg-cover bg-bottom">
            <div className="flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="font-denton font-bold 2xl:text-[92px] xl:text-[92px] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] 2xl:leading-[122px] xl:leading-[122px] lg:leading-[100px] md:leading-[60px] sm:leading-[50px] leading-[40px] text-center text-white 2xl:mb-[60px] xl:mb-[60px] lg:mb-[50px] md:mb-[40px] sm:mb-[30px] mb-[20px]">
                  {getStepTitle()}
                </h2>
                <div className="w-full">{renderStep()}</div>
              </div>

              <div className="flex items-center justify-center relative w-full gap-[10px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
                <div className="2xl:absolute xl:absolute lg:absolute md:absolute sm:static static font-lato font-bold 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] leading-[100%] text-white left-0 2xl:top-[100%] xl:top-[100%] lg:top-[100%] md:top-[100%] sm:top-0 top-0">
                  {getStepNumber()}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            {formType === "startProject" && !isSubmitted && (
              <div className="absolute 2xl:right-[94px] xl:right-[94px] md:right-[80px] sm:right-[20px] right-[20px] 2xl:bottom-[67px] xl:bottom-[67px] lg:bottom-[50px] md:bottom-[40px] sm:bottom-[20px] bottom-[20px] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-[12px] w-max mx-auto">
                <button
                  onClick={handleBack}
                  disabled={!canGoBack()}
                  className={`relative z-[10] 2xl:w-[64px] xl:w-[64px] lg:w-[64px] md:w-[64px] sm:w-[50px] w-[50px] 2xl:h-[64px] xl:h-[64px] lg:h-[64px] md:h-[64px] sm:h-[50px] h-[50px] rounded-full border border-white/50 flex items-center justify-center text-white bg-[#000000] ${!canGoBack() ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="22"
                    viewBox="0 0 11 22"
                    fill="none"
                    className="2xl:h-[22px] xl:h-[22px] lg:h-[22px] md:h-[22px] sm:h-[15px] h-[15px] transform rotate-[-90deg]"
                  >
                    <path
                      d="M4.67916 0.913869L4.67839 0.914595L0.484838 5.12847C0.170685 5.44415 0.171854 5.95476 0.48758 6.26899C0.803265 6.58319 1.31387 6.58198 1.62806 6.26629L4.44355 3.4371L4.44355 20.5161C4.44355 20.9615 4.8046 21.3225 5.25 21.3225C5.6954 21.3225 6.05645 20.9615 6.05645 20.5161L6.05645 3.43714L8.87194 6.26625C9.18613 6.58194 9.69674 6.58315 10.0124 6.26895C10.3282 5.95472 10.3293 5.44407 10.0152 5.12843L5.82162 0.914553L5.82085 0.913829C5.50561 0.597981 4.99335 0.59899 4.67916 0.913869Z"
                      fill="white"
                      className="arrow-path"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  disabled={!canGoNext()}
                  className={`2xl:w-[64px] xl:w-[64px] lg:w-[64px] md:w-[64px] sm:w-[50px] w-[50px] 2xl:h-[64px] xl:h-[64px] lg:h-[64px] md:h-[64px] sm:h-[50px] h-[50px] rounded-full border border-white/50 flex items-center justify-center text-white bg-[#000000] ${!canGoNext() ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="22"
                    viewBox="0 0 11 22"
                    fill="none"
                    className="2xl:h-[22px] xl:h-[22px] lg:h-[22px] md:h-[22px] sm:h-[15px] h-[15px] transform rotate-[-90deg]"
                  >
                    <path
                      d="M4.67916 21.0861L4.67839 21.0854L0.484838 16.8715C0.170685 16.5558 0.171854 16.0452 0.48758 15.731C0.803265 15.4168 1.31387 15.418 1.62806 15.7337L4.44355 18.5629L4.44355 1.48394C4.44355 1.03854 4.8046 0.67749 5.25 0.67749C5.6954 0.67749 6.05645 1.03854 6.05645 1.48394L6.05645 18.5629L8.87194 15.7337C9.18613 15.4181 9.69674 15.4169 10.0124 15.731C10.3282 16.0453 10.3293 16.5559 10.0152 16.8716L5.82162 21.0854L5.82085 21.0862C5.50561 21.402 4.99335 21.401 4.67916 21.0861Z"
                      fill="white"
                      className="arrow-path"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;
