import { Close } from '@mui/icons-material'
import { useState } from 'react'

const Announce = () => {
  const [isAnnounced, setIsAnnounced] = useState(true)

  const handleClose = () => {
    setIsAnnounced(false)
  }

  return (
    <div
      className={`${
        isAnnounced
          ? 'bg-pink-200 font-bold text-[20px] flex items-center justify-center h-[50px]'
          : 'hidden'
      }`}
    >
      <h2>Hurry up it's 40% off now</h2>
      <Close className="cursor-pointer" onClick={handleClose} />
    </div>
  )
}

export default Announce
