import React from "react";
import TransactionHistoryData from "../small/transactionHistoryData";
import pic from "../../../../../assets/ai3.jpeg";
import styles from "../../styles/home.module.css";

const TransactionsHistory: React.FC = () => {
  return (
    <div className="">
      <div className="mb-4 font-semibold text-[15px]">Transaction History</div>
      <div className={`${styles.nobars}`}>
        <div className="grid grid-cols-7 gap-20 font-medium text-[12px] mb-5">
          <div className="col-span-3">Name</div>
          <div>Type</div>
          <div className="col-span-2">Date</div>
          <div className="translate-x-[-20px]">Amount</div>
        </div>
        <div className="">
          <TransactionHistoryData
            photo={pic}
            name="Aaron Evans"
            type="Food"
            date="March 29, 2022"
            amount={45}
            activity="income"
          />
          <TransactionHistoryData
            name="Clement Stewart"
            type="Shopping"
            date="March 27, 2022"
            amount={241}
            activity="expense"
          />
          <TransactionHistoryData
            name="Jessica Johanne"
            type="Others"
            date="March 25, 2022"
            amount={100}
            activity="income"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionsHistory;
