import { useRouter } from "next/dist/client/router";
import { FunctionComponent } from "react";

import { IconType } from "react-icons";
const Card: FunctionComponent<{
  title: string;
  Icon: IconType;
}> = ({Icon,title,children}) => {
  return (
    <div className="mt-32 bg-[#1d1d1d] rounded-md w-[500px] m-auto flex flex-col justify-center items-center space-y-5 p-6">
      <div className="flex items-center space-x-4">
        <Icon />

        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
{
    children
}

    </div>
  );
};

export default Card;
