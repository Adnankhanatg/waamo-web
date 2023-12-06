import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className="pt-[100px] max-md:pt-[80px] max-sm:pt-[40px] mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24">
      {children}
    </div>
  );
};

export default Wrapper;
