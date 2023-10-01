'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'


const CreateRide = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [seats, setSeats] = useState('')
    const [desc, setDesc] = useState('')
    const [hostid, setHostId] = useState('')
    const [rideNumbers, setRideNumbers] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // if(!name || !title || !category || !desc){
        //     toast.error("All fields are required")
        //     return
        // }

        try {
          const res = await fetch(`http://localhost:3000/api/ride`, {
            // headers: {
            //    'Content-Type': 'application/json',
            //    'Authorization': `Bearer ${session?.user?.accessToken}`
            // },
            method: 'POST',
            body: JSON.stringify({title, price, seats, desc, hostid, rideNumbers})
          })

          if(!res.ok){
            throw new Error("Error occured")
          }

          const host = await res.json()

          router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section>
        <h2>Create Ride</h2>
    </section>
  )
}

export default CreateRide