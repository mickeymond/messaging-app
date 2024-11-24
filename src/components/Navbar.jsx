import { apiSearch } from '../services/chat';
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const Navbar = ({setRooms}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (event) => {
    const filter = JSON.stringify({
      roomName: { "$regex": searchQuery, "$options": "i" }
    });
    const response = await apiSearch(filter);
    setRooms(response.data);
  };


  return (
    <div> {/* Navbar */}
      <div className='justify center items-center'>
      <div className='flex gap-4 mt-3'>
        <input value={searchQuery} onChange={event=>setSearchQuery(event.target.value)} className='bg-slate-50 border w-7/12 p-3 rounded-full' />
        <button className="text-4xl" onClick={handleSearch}><CiSearch /></button>
      </div>

      </div>

    </div>
  )
}

export default Navbar;