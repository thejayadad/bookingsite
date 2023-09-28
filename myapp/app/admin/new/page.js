'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'



const Host = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [city, setCity] = useState("")
    const [address, setAddress] = useState('')
    const [distance, setDistance] = useState('')
    const [photos, setPhotos] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [cheapestPrice, setCheapestPrice] = useState('')
    const router = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault()

        // if(!name || !title || !category || !desc){
        //     toast.error("All fields are required")
        //     return
        // }

        try {
          const res = await fetch(`http://localhost:3000/api/host`, {
            // headers: {
            //    'Content-Type': 'application/json',
            //    'Authorization': `Bearer ${session?.user?.accessToken}`
            // },
            method: 'POST',
            body: JSON.stringify({name, type, city, address, distance, photos, title, desc, cheapestPrice})
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
        <h2>Add Host</h2>
        <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Type...' onChange={(e) => setType(e.target.value)} />
                    <input type="text" placeholder='City...' onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder='Address...' onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder='Distance...' onChange={(e) => setDistance(e.target.value)} />
                    <input type="text" placeholder='Photos...' onChange={(e) => setPhotos(e.target.value)} />
                    <input type="number" placeholder='CheapestPrice...' onChange={(e) => setCheapestPrice(e.target.value)} />
                    <input type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder='Description...' onChange={(e) => setDesc(e.target.value)} />
                   <button >Create</button>
                </form>
            <ToastContainer />
    </section>
  )
}

export default Host