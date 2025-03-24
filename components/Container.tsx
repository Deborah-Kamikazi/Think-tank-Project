import React, { ComponentProps } from "react";

interface ContainerProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${className ? className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
