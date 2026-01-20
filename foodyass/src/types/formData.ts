import { ChangeEvent } from "react";

export interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  title: string;
  message: string;
}

export interface JobOffersFormData {
  cycle: string;
  type: string;
  employmentType: string;
  salary: string;
  experience: string;
  city: string;
}

export interface JobOffersErrors {
  [key: string]: string;
}

export type OfferType = {
  id: number;
  title: string;
  educationalCycle: string;
  city: string[];
  salary: string;
  employmentType: string;
  experience: string;
  description: string;
  categories: string[];
  createdAt: string;
  responsibilities?: string[];
};

export interface LabeledInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isError?: boolean | string;
  bgColor?: string;
  isDisabled?: boolean;
  className?: string;
}

export interface OptionType {
  value: string;
  label: string;
}

export interface LabeledSelectProps {
  label?: string;
  name: string;
  value: string;
  options?: OptionType[];
  onChange?: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  isError?: boolean | string;
  bgColor?: string;
  isDisabled?: boolean;
  className?: string;
  hasDropDown?: boolean;
  dropDownOptions?: OptionType[];
  onSelect?: (e: { target: { name: string; value: string } }) => void;
  multiple?: boolean;
  formatLabel?: (text: string) => string;
}
