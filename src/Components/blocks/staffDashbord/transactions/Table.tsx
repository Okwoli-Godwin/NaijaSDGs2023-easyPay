

const Table = () => {


        const tableItems = [
            {
                avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                name: "Liam James",
                transactionType: "Credit",
                transactionFor: "salary",
                phone_nimber: "22-11-2023",
                amount: "N20000",
                ID: "#002156729015",
                status: "failed"
            },
            {
                avatar: "https://randomuser.me/api/portraits/men/86.jpg",
                name: "Olivia Emma",
                transactionType: "debit",
                transactionFor: "salary",
                phone_nimber: "22-11-2023",
                amount: "N20000",
                ID: "#002156729015",
                status: "success"

            },
            {
                avatar: "https://randomuser.me/api/portraits/women/79.jpg",
                name: "William Benjamin",
                transactionType: "credit",
                transactionFor: "salary",
                phone_nimber: "22-11-2023",
                amount: "N20000",
                ID: "#002156729015",
                status: "failed"
            },
            {
                avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
                name: "Henry Theodore",
                transactionType: "credit",
                transactionFor: "salary",
                phone_nimber: "22-11-2023",
                amount: "N20000",
                ID: "#002156729015",
                status: "success"
            },
            {
                avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                name: "Amelia Elijah",
                transactionType: "debit",
                transactionFor: "salary",
                phone_nimber: "22-11-2023",
                amount: "N20000",
                ID: "#002156729015",
                status: "failed"
            },
        ]
    
        return (
            <div className="mt-3 px-4 md:px-8">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        History
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Browse through all of your past transactions
                    </p>
                </div>
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Username/Transaction</th>
                                <th className="py-3 px-6">Type</th>

                                <th className="py-3 px-6">Phone number</th>
                                <th className="py-3 px-6">amount</th>
                                <th className="py-3 px-6">ID</th>
                                <th className="py-3 px-6">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                tableItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                            <div>
                                                <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                                <span className="block text-green-700 text-xs font-semibold">{item.transactionType}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.transactionFor}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.phone_nimber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.ID}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-red-400 font-semibold">{item.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

export default Table