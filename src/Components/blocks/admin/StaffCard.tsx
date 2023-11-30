

const StaffCard = () => {
  return (
    <div>

<a href="#" className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[140px] md:rounded-none md:rounded-s-lg" src="https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="tracking-tight text-gray-900 dark:text-white pb-2">Chief Marketing officer</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dr. Godwin Cecee</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>

    </div>
  )
}

export default StaffCard