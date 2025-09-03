import { AriaModalOverlayProps } from "react-aria";
import { OverlayTriggerState } from "@react-stately/overlays";
import { ButtonProps } from "@/components/button/types";
import { ReactNode } from "react";

export type ModalProps = {
  title: string;
  state: OverlayTriggerState;
  buttons: ButtonProps[];
  cancelButton?: Partial<ButtonProps>;
  children: ReactNode;
} & AriaModalOverlayProps;
