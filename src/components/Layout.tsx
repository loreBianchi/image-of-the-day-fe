import type { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
  classNames?: string;
};

export const Layout: FC<LayoutProps> = ({ children, classNames }) => {
  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-900 text-gray-100 ${ // Ho semplificato il tuo gradiente che usava classi non standard di Tailwind
        classNames ?? ""
      }`}
    >
      <Header />
      <main className="container mx-auto px-4 py-16">
        {children}
      </main>
      
      <Footer /> 
    </div>
  );
};