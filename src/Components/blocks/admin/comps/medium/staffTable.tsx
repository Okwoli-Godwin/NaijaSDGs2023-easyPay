import { FaNairaSign } from "react-icons/fa6";
import { UseAppSelector } from "../../../../Global/Store";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin } from "../../../../Api/AdminEndpoints";

const StaffTable = () => {

  const user = UseAppSelector((state: any) => state.Admin)
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  })
  // const tableItems = [
  //   {
  //     avatar:
  //       "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  //     name: "Liam James",
  //     email: "liamjames@example.com",
  //     phone_nimber: "+234 (555) 000-000",
  //     position: "Software engineer",
  //     salary: 100,
  //   },
  //   {
  //     avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  //     name: "Olivia Emma",
  //     email: "oliviaemma@example.com",
  //     phone_nimber: "+234 (555) 000-000",
  //     position: "Product designer",
  //     salary: 90,
  //   },
  //   {
  //     avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  //     name: "William Benjamin",
  //     email: "william.benjamin@example.com",
  //     phone_nimber: "+234 (555) 000-000",
  //     position: "Front-end developer",
  //     salary: 80,
  //   },
  //   {
  //     avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
  //     name: "Henry Theodore",
  //     email: "henrytheodore@example.com",
  //     phone_nimber: "+234 (555) 000-000",
  //     position: "Laravel engineer",
  //     salary: 120,
  //   },
  //   {
  //     avatar:
  //       "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  //     name: "Amelia Elijah",
  //     email: "amelia.elijah@example.com",
  //     phone_nimber: "+234 (555) 000-000",
  //     position: "Open source manager",
  //     salary: 75,
  //   },
  // ];

  return (
    <div className="w-full py-10">
      <div className="items-start justify-between md:flex w-full">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Staff members
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-[var(--accent-color)] rounded-[3px] hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">
            Add member
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username/mail</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Salary</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {getAdmin?.data?.data?.viewUser.map((el:any) => (
              <tr key={el?._id}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src="" className="w-10 h-10 rounded-full" />
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {el?.yourName}
                    </span>
                    <span className="block text-gray-700 text-xs">
                      myemail@gmail.com
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {el?.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{el.companyname}</td>
                <td className="px-6 py-4whitespace-nowrap">
                  <div className="flex items-center">
                    <span>
                      <FaNairaSign className="" />
                    </span>
                    200k
                  </div>
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-[var(--accent-color)] hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Edit
                  </a>
                  <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffTable;
