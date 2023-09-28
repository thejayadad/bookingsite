'use client'
import React from 'react'
import { useSession } from "next-auth/react"

const AdminDashboard = () => {
    const { data: session, status } = useSession()
    if (session?.user.role === "admin") {
        return <p>You are an admin, welcome!</p>
      }

      return <p>You are not authorized to view this page!</p>
  return (
    <section>
        admins
    </section>
  )
}

export default AdminDashboard