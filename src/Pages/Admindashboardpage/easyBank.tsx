import React, { useState } from "react";
import Tabs from "../../Components/blocks/admin/comps/medium/tabs";
import Bank from "../../Components/blocks/admin/comps/medium/bank";
import SafeLock from "../../Components/blocks/admin/comps/medium/safeLock";
import FlexNaira from "../../Components/blocks/admin/comps/medium/flexNaira";

const Easybank: React.FC = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[92%]">
        <div className="text-xl">EazyBank</div>
        <div className="mt-5">
          <Tabs
            firstClick={() => {
              setOne(true);
              setTwo(false);
              setThree(false);
            }}
            first={one === true ? true : false}
            secondClick={() => {
              setOne(false);
              setTwo(true);
              setThree(false);
            }}
            second={two === true ? true : false}
            thirdClick={() => {
              setOne(false);
              setTwo(false);
              setThree(true);
            }}
            third={three === true ? true : false}
          />
        </div>
        <div className="mt-6">
          {one ? <Bank /> : two ? <FlexNaira /> : three ? <SafeLock /> : null}
        </div>
      </div>
    </div>
  );
};

export default Easybank;
