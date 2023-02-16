import { FC, PropsWithChildren } from "react";
import { Route, Routes } from "react-router-dom";

export const NotFoundPages: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};
