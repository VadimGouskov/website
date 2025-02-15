import * as React from "react";
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};
