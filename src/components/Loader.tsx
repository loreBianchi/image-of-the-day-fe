import type { FC } from "react";

type LoaderProps = {
  text: string;
};

export const Loader: FC<LoaderProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
        <p className="text-white text-xl">{text}</p>
      </div>
    </div>
  );
};
