import { useRouter } from "next/dist/client/router";
import { FunctionComponent, MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";

const Button: FunctionComponent<{
  text: string;
  Icon: IconType;
  onClickHandler?: MouseEventHandler<any>;
}> = ({ Icon, onClickHandler, text }) => {
  return (
    <button
      onClick={onClickHandler}
      className="focus:outline-none flex items-center px-4 py-2 cursor-pointer rounded-full bg-[blue] space-x-3"
    >
      <span>{text}</span>
      <Icon />
    </button>
  );
};

export default Button;
