import { IconChevronLeft } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='h-[70vh] flex flex-col gap-2 items-center section justify-center'>
        <div className="flex flex-col  h-full items-center justify-center">
      <span className="font-p-2 mb-2 font-semibold opacity-85">Page not found</span>
      <Link style={{borderRadius: "var(--radius-s)"}} href="/" className="cta font-p-3 items-center flex">
        <IconChevronLeft className='h-4 w-4 opacity-50' /> Home
      </Link>
    </div>
    </div>
  )
}

export default NotFound