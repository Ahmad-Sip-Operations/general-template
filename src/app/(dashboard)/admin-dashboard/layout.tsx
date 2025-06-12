import React from "react";

export const metadata = {
  title: "Admin Dashboard",
  description: "Administrative controls and reports",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
