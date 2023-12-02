import React, { useState } from "react";
import Balance from "./balance";
import SaveInfo from "./saveInfo";
import TransactionTable from "../../TransationTable";

const Bank: React.FC = () => {
  const [all, setAll] = useState(true);
  const [debit, setDebit] = useState(false);
  const [credit, setCredit] = useState(false);
  return (
    <>
      <div className="grid grid-cols-3 max-[800px]:grid-cols-1 gap-7">
        <div className="col-span-2 flex flex-col gap-4">
          <div>
            <Balance balance={0} />
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
        <div className="flex flex-col gap-5">
          <div className="rounded-[5px] border-[1px] p-4 flex flex-col gap-2">
            <div className="text-[11px]">INTEREST RATE</div>
            <div className="text-3xl text-[var(--accent-color)]">5%</div>
            <div className="text-[11px]">Per Annum</div>
          </div>
          <div>
            <SaveInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bank;
