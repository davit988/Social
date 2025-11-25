import { Box } from '@mui/material'
import React from 'react'
import { UsersCard } from '../../molecules/UsersCard/UsersCard'
export const UsersList = ({users}) => {
  return (
    <>
    <Box>
        {users?.map((elm) => <UsersCard/>)}
      </Box>
    </>
  )
}
