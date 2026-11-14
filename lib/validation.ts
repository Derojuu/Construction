import { EnquiryFormValues } from "@/types";

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  mobile?: string;
  email?: string;
  referral?: string;
  message?: string;
}

export function validateEnquiryForm(values: EnquiryFormValues): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!values.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.referral.trim()) {
    errors.referral = "Please let us know how you heard about us.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}
