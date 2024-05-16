import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Doctors',
            path:'/DoctorsList'
        },
        {
            id:3,
            name:'Appointments',
            path:'/Appointments'
        },
    ]
  return (
      <div className='flex items-center justify-between p-4 shadow-sm'>
          <div className='flex items-center gap-11'>
              <Image src='/logo.svg' alt='logo'
                  width={100} height={60} />
              <ul className='md:flex gap-8 hidden'>
                  {Menu.map((item, index) => (
                      <Link key={index} href={item.path}>
                          <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-out'>
                              {item.name}
                          </li>
                      </Link>
                      
                  ))}
              </ul>
          </div>
          <Link href="/SignUp"><Button>sign up</Button></Link>
      </div>
  )
}

export default Header