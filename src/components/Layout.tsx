import type { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  classNames?: string;
};

export const Layout: FC<LayoutProps> = ({ children, classNames }) => {
  return (
    <div
      className={`min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 ${
        classNames ?? ""
      }`}
    >
      {children}
    </div>
  );
};
