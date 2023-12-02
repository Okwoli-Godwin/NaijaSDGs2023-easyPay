
import AppSidebar from '../../Components/blocks/staffDashbord/AppSidebar'
import SavingsMain from '../../Components/blocks/staffDashbord/SavingsMain'

const Savings = () => {
  return (
    <div className=' grid grid-cols-2 gap-2 w-full'>
        <SavingsMain/>
        <AppSidebar/>
    </div>
  )
}

export default Savings