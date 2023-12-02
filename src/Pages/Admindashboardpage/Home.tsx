import React from "react";
import { BiSolidDollarCircle, BiSolidBadgeDollar } from "react-icons/bi";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import CardImage from "../../assets/card.jpeg";
import chart from "../../assets/fin.png";
import Keyfigures from "../../Components/blocks/admin/comps/medium/keyfigures";
import TransactionsHistory from "../../Components/blocks/admin/comps/medium/transactionsHistory";
import QuickTransactions from "../../Components/blocks/admin/comps/medium/quickTransactions";
import Goals from "../../Components/blocks/admin/comps/medium/goals";
import styles from "../../Components/blocks/admin/styles/home.module.css";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center mt-10">
      <div className="w-[92%] grid grid-cols-3 max-[1000px]:grid-cols-1 max-[800px]:gap-10 gap-20">
        <div className="min-[800px]:col-span-2">
          <div className="grid h-fit grid-cols-4 max-[500px]:grid-cols-2 gap-4">
            <Keyfigures
              amount={4000}
              subject="Balance"
              color="green"
              icon={<BiSolidDollarCircle />}
            />
            <Keyfigures
              amount={480}
              subject="Income"
              color="navy"
              icon={<BiSolidBadgeDollar />}
            />
            <Keyfigures
              amount={120}
              subject="Expense"
              color="goldenrod"
              icon={<PiCurrencyDollarSimpleFill />}
            />
            <Keyfigures
              amount={200}
              subject="Saving"
              color="brown"
              icon={<FaSackDollar />}
            />
          </div>
          <div className="mb-5 h-72 my-10">
            <img
              src={chart}
              className="w-full h-full object-left object-contain"
            />
          </div>
          <div>
            <TransactionsHistory />
          </div>
        </div>
        <div className="max-[800px]:pb-[80px]">
          <div className={styles.add_Card}>
            <div className={styles.card_title}>
              <h4>My Card</h4>
              <button className={styles.card_button}>Add Card</button>
            </div>
            <img className={styles.card_image} src={CardImage} alt="" />
          </div>
          <div className="mb-5">
            <QuickTransactions />
          </div>
          <div>
            <Goals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
