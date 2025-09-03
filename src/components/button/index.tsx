"use client";

import { useRef } from "react";
import { useButton } from "react-aria";

import styles from "./styles.module.scss";
import { ButtonProps } from "./types";

export default function Button({
  variant,
  scheme = "dark",
  icon,
  iconPos = "left",
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      className={styles.wrapper}
      data-variant={variant}
      data-scheme={scheme}
      ref={ref}
      {...buttonProps}
      {...props}
    >
      {iconPos === "left" && icon}
      {children}
      {iconPos === "right" && icon}
    </button>
  );
}
