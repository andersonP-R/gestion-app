import React from "react";

export * from "./AdminLayout";

export const DashboardLayout = React.lazy(() => import("./DashboardLayout"));
export const AuthLayout = React.lazy(() => import("./AuthLayout"));
