import { ButtonProps } from "@/components/button/types";
import { LinkProps } from "@/components/link/types";
import { FormHTMLAttributes } from "react";

export type FormProps = {
  title: string;
  submitButton: Partial<ButtonProps> & { children: ButtonProps["children"] };
  extraButtons?: ButtonProps[];
  extraLinks?: (LinkProps & { prefix?: string })[];
} & FormHTMLAttributes<HTMLFormElement>;
