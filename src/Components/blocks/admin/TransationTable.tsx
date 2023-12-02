import { BsDash } from "react-icons/bs";
import { FaNairaSign } from "react-icons/fa6";

type iTable = {
  notitle?: boolean;
};

const TransactionTable: React.FC<iTable> = ({ notitle }) => {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      transaction: "debit",
      type: "Food",
      date: "March 29, 2022",
      amount: 100,
      id: "fff222333444",
      status: "failed",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      transaction: "debit",
      type: "Shopping",
      date: "March 27, 2022",
      amount: 90,
      id: "fff222333445",
      status: "succeeded",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      transaction: "credit",
      type: "Others",
      date: "March 25, 2022",
      amount: 80,
      id: "fff222333446",
      status: "succeeded",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      transaction: "credit",
      type: "Food",
      date: "March 23, 2022",
      amount: 120,
      id: "fff222333447",
      status: "failed",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      transaction: "credit",
      type: "Shopping",
      date: "March 21, 2022",
      amount: 75,
      id: "fff222333448",
      status: "succeeded",
    },
  ];

  return (
    <div
      style={{
        paddingTop: notitle ? "" : "40px",
        paddingBottom: notitle ? "" : "40px",
      }}
      className="w-full">
      {!notitle && (
        <div className="items-start justify-start md:flex w-full">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Transaction History
            </h3>
          </div>
        </div>
      )}
      <div
        style={{ marginTop: notitle ? "" : "48px" }}
        className="shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username/transaction</th>
              <th className="py-3 px-6">Type</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src={item.avatar} className="w-10 h-10 rounded-full" />
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {item.name}
                    </span>
                    <span
                      style={{
                        color:
                          item.transaction === "credit"
                            ? "var(--accent-color)"
                            : "#e96a6aef",
                      }}
                      className="block text-xs font-semibold">
                      {item.transaction}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                <td className="px-6 py-4whitespace-nowrap">
                  <div className="flex items-center">
                    {item.transaction === "debit" && (
                      <span>
                        <BsDash />
                      </span>
                    )}
                    <span>
                      <FaNairaSign className="" />
                    </span>
                    {`${item.amount}k`}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td
                  style={{
                    color: item.status === "failed" ? "#e96a6aef" : "#19dd82",
                  }}
                  className="px-6 py-4 whitespace-nowrap">
                  {item.status === "failed" ? "failed" : "succeeded"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
