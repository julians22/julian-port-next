
'use client';

import Head from 'next/head'
import React from 'react'

import { usePathname  } from 'next/navigation'


export default function Header({title} : {title: string}) {
  const path = usePathname ()

  console.log(path);
  

  return (
    <div>
        <div className='relative'>
          <h1 className='font-semibold text-2xl text-center text-green-500 lg:text-4xl'>{title}</h1>

          {/* Float right back button */}

          <div className='lg:top-0 lg:right-0 bottom-0 fixed lg:absolute inset-x-0 lg:inset-x-auto flex justify-center lg:justify-end space-x-4'>
          <a href='/'>
            <button className='bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 dark:bg-gray-700 mt-2 px-4 py-2 rounded-lg text-black hover:text-white dark:hover:text-black dark:text-white'>
              Beranda
            </button>
          </a>

          {/* Back button to blog post */}
          {/* Show if route is != 'blog' */}

          {
            path !== '/blog' && (
              <a href='/blog'>
                <button className='bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 dark:bg-gray-700 mt-2 px-4 py-2 rounded-lg text-black hover:text-white dark:hover:text-black dark:text-white'>
                  Blog
                </button>
              </a>
            )
          }
          </div>

        </div>
        <hr className='border-1 border-gray-300 dark:border-gray-700 my-2 lg:my-4' />
    </div>
  )
}
