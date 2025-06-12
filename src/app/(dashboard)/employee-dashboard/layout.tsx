import React from "react";

export const metadata = {
  title: "Employee Dashboard",
  description: "This is the employee dashboard page.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
