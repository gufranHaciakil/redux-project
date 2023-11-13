import UserAddAddres from 'components/User/UserAddAddres'
import UserSidebar from 'components/User/UserSidebar'
import React from 'react'

type Props = {}

const UserAddAddresPage = (props: Props) => {
  return (
    <div className="flex gap-3">
      <div className="">
        <UserSidebar />
      </div>
      <div className="flex flex-col items-center md:items-start ml-4 w-4/5 md:w-[100%]">
        <UserAddAddres />
      </div>
    </div>  )
}

export default UserAddAddresPage