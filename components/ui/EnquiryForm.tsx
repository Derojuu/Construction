"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { EnquiryFormValues, EnquiryRole } from "@/types";
import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryFormValues>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    roles: [],
    referral: "",
    message: "",
    honeypot: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleRole = (role: EnquiryRole) => {
    setValues((prev) => {
      const exists = prev.roles.includes(role);
      return {
        ...prev,
        roles: exists ? prev.roles.filter((r) => r !== role) : [...prev.roles, role],
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (values.honeypot) return; // Anti-spam bot trap
    setSubmitted(true);
  };

  return (
    <div id="nf-form-3-cont" className="nf-form-cont w-full" role="form">
      {submitted ? (
        <div className="p-8 border border-black bg-white/20 rounded text-black font-PPFraktionMono space-y-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={24} className="text-black" />
            <p className="text-xl font-bold uppercase tracking-wider mb-0">
              Thank you for your enquiry.
            </p>
          </div>
          <p className="mb-0">
            We have received your message and will be in touch with you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setValues({
                firstName: "",
                lastName: "",
                mobile: "",
                email: "",
                roles: [],
                referral: "",
                message: "",
                honeypot: "",
              });
              setFileName(null);
            }}
            className="text-xs uppercase underline tracking-widest pt-2 block cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full" suppressHydrationWarning>
          {/* Honeypot anti-spam field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website-hp">Website</label>
            <input
              type="text"
              id="website-hp"
              name="honeypot"
              value={values.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              suppressHydrationWarning
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* First Name */}
            <div className="nf-field-container textbox-container">
              <label
                htmlFor="firstName"
                className="block font-PPFraktionMono text-xs uppercase mb-1 font-normal tracking-wide text-black"
              >
                First name <span className="text-black">*</span>
              </label>
              <div className="nf-field-element">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={values.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black py-2 font-PPFraktionMono text-sm outline-none transition focus:border-b-2"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="nf-field-container textbox-container">
              <label
                htmlFor="lastName"
                className="block font-PPFraktionMono text-xs uppercase mb-1 font-normal tracking-wide text-black"
              >
                Last name <span className="text-black">*</span>
              </label>
              <div className="nf-field-element">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={values.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black py-2 font-PPFraktionMono text-sm outline-none transition focus:border-b-2"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="nf-field-container textbox-container">
              <label
                htmlFor="mobile"
                className="block font-PPFraktionMono text-xs uppercase mb-1 font-normal tracking-wide text-black"
              >
                Mobile <span className="text-black">*</span>
              </label>
              <div className="nf-field-element">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  required
                  value={values.mobile}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black py-2 font-PPFraktionMono text-sm outline-none transition focus:border-b-2"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Email */}
            <div className="nf-field-container textbox-container">
              <label
                htmlFor="email"
                className="block font-PPFraktionMono text-xs uppercase mb-1 font-normal tracking-wide text-black"
              >
                Email <span className="text-black">*</span>
              </label>
              <div className="nf-field-element">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black py-2 font-PPFraktionMono text-sm outline-none transition focus:border-b-2"
                  suppressHydrationWarning
                />
              </div>
            </div>
          </div>

          {/* Role Checkboxes */}
          <div className="my-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 m-0 p-0 list-none">
              {(
                [
                  { id: "architect", label: "Architect" },
                  { id: "project-manager", label: "Project Manager" },
                  { id: "homeowner", label: "Homeowner" },
                  { id: "other", label: "Other" },
                ] as const
              ).map(({ id, label }) => {
                const checked = values.roles.includes(id);
                return (
                  <li key={id} className="flex items-center">
                    <label
                      htmlFor={`role-${id}`}
                      className="inline-flex items-center gap-2 cursor-pointer font-PPFraktionMono text-xs uppercase select-none text-black tracking-wide"
                    >
                      <input
                        type="checkbox"
                        id={`role-${id}`}
                        checked={checked}
                        onChange={() => toggleRole(id)}
                        className="sr-only"
                        suppressHydrationWarning
                      />
                      <span
                        className={`w-4 h-4 rounded-sm border border-black flex items-center justify-center transition-colors ${
                          checked ? "bg-black text-white" : "bg-transparent"
                        }`}
                      >
                        {checked && <span className="text-[10px] leading-none">✓</span>}
                      </span>
                      <span>{label}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Referral Question */}
          <div className="nf-field-container textbox-container mb-6">
            <label
              htmlFor="referral"
              className="block font-PPFraktionMono text-xs uppercase mb-1 font-normal tracking-wide text-black"
            >
              How did you find out about us? <span className="text-black">*</span>
            </label>
            <div className="nf-field-element">
              <textarea
                id="referral"
                name="referral"
                required
                rows={2}
                value={values.referral}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-black py-2 font-PPFraktionMono text-sm outline-none resize-y min-h-[4rem] transition focus:border-b-2"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* Message */}
          <div className="nf-field-container textarea-container mb-8">
            <label
              htmlFor="message"
              className="block font-PPFraktionMono text-xs uppercase mb-1 font-normal tracking-wide text-black"
            >
              Message <span className="text-black">*</span>
            </label>
            <div className="nf-field-element">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={values.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-black py-2 font-PPFraktionMono text-sm outline-none resize-y min-h-[8rem] transition focus:border-b-2"
                suppressHydrationWarning
              />
            </div>
          </div>

          {/* File Upload and Submit Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            <div>
              <input
                ref={fileInputRef}
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
                suppressHydrationWarning
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-3 border border-black px-4 py-2.5 font-PPFraktionMono text-xs uppercase tracking-wider bg-transparent text-black hover:bg-black hover:text-[#B9B36D] transition duration-200 cursor-pointer rounded-xs"
                suppressHydrationWarning
              >
                <span className="relative w-4 h-5 inline-block">
                  <Image
                    src="/images/file-upload.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
                <span>{fileName ? `File: ${fileName}` : "File Upload"}</span>
              </button>
            </div>

            <div>
              <ButtonWithArrow type="submit" variant="reverse">
                Submit
              </ButtonWithArrow>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
