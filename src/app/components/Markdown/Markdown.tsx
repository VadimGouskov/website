import * as React from "react";
import "./markdown.css";

type MarkdownProps = {
  children: React.ReactNode;
};

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return <div className="markdown">{children}</div>;
};
