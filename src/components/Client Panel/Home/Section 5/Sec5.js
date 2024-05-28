import Image from "./Image";
import Sentence from "./Sentence";

export default function Sec5() {
  return (
    <div className=" container">
      <br></br>
      <div className="grid grid-flow-col grid-cols-2 gap-0 ">
        <div className=" ">
          <Image />

        </div>
        <div className="  ">
          <Sentence />
        </div>
      </div>
      <br></br>
    </div>
  );
}
