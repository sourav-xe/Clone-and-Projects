import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TrackingStatus from '../components/TrackingStatus'

function PhoneDetails() {
  const { id } = useParams()
  const [phone, setPhone] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:5000/api/phones/${id}`)
      .then(res => res.json())
      .then(data => setPhone(data))
  }, [id])

  if (!phone) return <p className="text-center mt-8">Loading...</p>

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={phone.imageUrl} alt={phone.name} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{phone.name}</h2>
      <p className="mb-2">Color: {phone.color}</p>
      <p className="mb-4">Description: {phone.description}</p>

      {/* Tracking */}
      <h3 className="text-xl font-semibold mt-8 mb-2">Order Tracking</h3>
      <TrackingStatus currentStatus={phone.status} />
    </div>
  )
}

export default PhoneDetails
