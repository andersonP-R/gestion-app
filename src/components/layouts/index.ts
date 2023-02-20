import React from "react";

export * from "./AdminLayout";

export const MainLayout = React.lazy(() => import("./MainLayout"));
export const AuthLayout = React.lazy(() => import("./AuthLayout"));
