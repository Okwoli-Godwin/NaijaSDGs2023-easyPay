import React from 'react'
import SettingsHeader from '../../Components/blocks/staffDashbord/settings/SettingsHeader'
import SettingsBody from '../../Components/blocks/staffDashbord/settings/SettingsBody'

const Settings:React.FC = () => {
  return (
    <div>
        <SettingsHeader/>
       <div className='mt-8'>
       <SettingsBody/>
       </div>
    </div>
  )
}

export default Settings