import React, { useState } from "react";
import Balance3 from "./balance3";
import TransactionTable from "../../TransationTable";
import SavingsOption from "./savingsOption";

const FlexNaira: React.FC = () => {
  const [show, setShow] = useState(false);
  const [all, setAll] = useState(true);
  const [debit, setDebit] = useState(false);
  const [credit, setCredit] = useState(false);
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-5 max-[800px]:grid-cols-1">
        <div className="col-span-2 flex flex-col gap-4">
          <div>
            <Balance3 balance={0} />
          </div>
          <div className="rounded-[5px] border-[1px] p-4">
            <div className="text-[11px]">TRANSACTIONS</div>
            <div className="flex items-center gap-4 my-2">
              <div
                onClick={() => {
                  setAll(true);
                  setCredit(false);
                  setDebit(false);
                }}
                style={{
                  borderWidth: all ? "0px" : "1px",
                  color: all
                    ? "var(--primary-color)"
                    : "var(--secondary-color)",
                  backgroundColor: all
                    ? "var(--accent-color)"
                    : "var(--primary-color)",
                }}
                className="flex cursor-pointer items-center justify-center rounded-[4px] px-4 py-1">
                All
              </div>
              <div
                onClick={() => {
                  setAll(false);
                  setCredit(true);
                  setDebit(false);
                }}
                style={{
                  borderWidth: credit ? "0px" : "1px",
                  color: credit
                    ? "var(--primary-color)"
                    : "var(--secondary-color)",
                  backgroundColor: credit
                    ? "var(--accent-color)"
                    : "var(--primary-color)",
                }}
                className="flex cursor-pointer items-center justify-center rounded-[4px] px-4 py-1">
                Credit
              </div>
              <div
                onClick={() => {
                  setAll(false);
                  setCredit(false);
                  setDebit(true);
                }}
                style={{
                  borderWidth: debit ? "0px" : "1px",
                  color: debit
                    ? "var(--primary-color)"
                    : "var(--secondary-color)",
                  backgroundColor: debit
                    ? "var(--accent-color)"
                    : "var(--primary-color)",
                }}
                className="flex cursor-pointer items-center justify-center rounded-[4px] px-4 py-1">
                Debit
              </div>
            </div>
            <div>
              <TransactionTable notitle />
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => setShow(true)}
            className="w-full cursor-pointer px-2 py-4 bg-[var(--accent-color)] text-[var(--primary-color)] rounded-[5px] font-medium flex justify-center items-center">
            GET ACCOUNT NUMBER
          </div>
        </div>
      </div>
      {show && <SavingsOption cancel={() => setShow(false)} />}
    </>
  );
};

export default FlexNaira;
