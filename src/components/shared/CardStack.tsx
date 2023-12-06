import { BsRocketTakeoff } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { FcEngineering } from "react-icons/fc";
import Card from "./Card";
import Wrapper from "./Wrapper";

const CardStack = () => {
  return (
    <Wrapper>
      <h1 className="items-center text-4xl font-bold text-center mb-8  ">Vission</h1>
      <div className="flex flex-wrap gap-4 justify-between mb-[100px] ">
        <Card
          icon={<BsRocketTakeoff className="h-12 w-12  text-primary-500" />}
          heading="Our Mission"
          paragraph="To empower and uplift our local community by providing access to resources, programs, and services that promote self-sufficiency, education growth, and neighborhood support. We believe that everyone deserves equal opportunities to thrive and succeed, regardless or their background, race, and or circumstances."
        />
        <Card
          icon={<FaRegHandshake className="h-12 w-12 text-primary-500" />}
          heading="Solution Driven"
          paragraph="At Waamo Relief we focus on finding effective and sustainable solutions to social, economic, and
          environmental issues. Our organization is working towards achieving tangible results that can have a positive impact on the communities we
          serve."
        />
        <Card
          icon={<FcEngineering className="h-12 w-12 text-primary-500" />}
          heading="Innovation"
          paragraph="As a nonprofit we believe that Innovations are essential in addressing complex social problems as they
          enable organizations to deliver more impactful solutions and leverage resources effectively. We also use creative and unique approach that
          addresses social and economic challenges."
        />
      </div>
    </Wrapper>
  );
};

export default CardStack;
