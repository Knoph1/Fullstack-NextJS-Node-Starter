import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    axios.get('http://localhost:3001/api/message')
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage("Failed to fetch from backend."))
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Fullstack App</h1>
        <p className="text-lg text-center">{message}</p>
      </div>
    </main>
  )
}