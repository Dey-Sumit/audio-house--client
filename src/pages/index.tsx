import { BsArrowRight } from "react-icons/bs";
import { FcDisclaimer } from "react-icons/fc";

import Card from "@components/Card";
import { useRouter } from "next/dist/client/router";
import Button from "@components/Button";

export default function Home() {
  const { push } = useRouter();

  return (
    <Card Icon={FcDisclaimer} title="Welcome to Audio House">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo pariatur nobis excepturi, vero
        animi est perferendis in recusandae adipisci facilis libero delectus? Aperiam quod iste
        cumque commodi? Ducimus, amet possimus?
      </p>
      <Button text="Get Your UserName" Icon={BsArrowRight} onClickHandler={() => push("/anc")} />
      <p
        className="flex items-center space-x-4 cursor-pointer text-[blue]"
        onClick={() => push("/login")}
      >
        Have an Invite Text? <span className="ml-2 font-semibold"> Sign In</span>
      </p>
    </Card>
  );
}
