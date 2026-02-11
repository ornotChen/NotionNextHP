import Link from 'next/link'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  if (!link || !link.show) {
    return null
  }

  const hasSubMenu = link?.subMenus?.length > 0

  return (
    <li
      className='cursor-pointer py-2 px-3'
      onMouseEnter={() => changeShow(true)}
      onMouseLeave={() => changeShow(false)}>
      {!hasSubMenu && (
        <div className='block text-black dark:text-gray-50 nav'>
          <Link href={link?.href} target={link?.target}>
            {link?.icon && <i className={link?.icon} />} {link?.name}
          </Link>
        </div>
      )}

      {hasSubMenu && (
        <div className='block text-black dark:text-gray-50 nav'>
          {link?.icon && <i className={link?.icon} />} {link?.name}
          <i
            className={`px-2 fas fa-chevron-down duration-500 transition-all ${show ? ' rotate-180' : ''}`}></i>
        </div>
      )}

      {/* 子菜单 */}
      {hasSubMenu && (
        <ul
          className={`${show ? 'visible opacity-100 top-16 ' : 'invisible opacity-0 top-14'} bg-[#f5f5f4]/90 dark:bg-[#111111]/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-20 absolute block drop-shadow-lg `}>
          {link.subMenus.map((sLink, index) => {
            return (
              <li
                key={index}
                className='text-gray-700 dark:text-gray-200  hover:bg-gray-100/70 dark:hover:bg-gray-800/70 tracking-widest font-light transition-all duration-200 dark:border-gray-800 py-3 pr-6 pl-3'>
                <Link href={sLink.href} target={link?.target}>
                  <span className='text-sm text-nowrap font-extralight'>
                    {link?.icon && <i className={sLink?.icon}> &nbsp; </i>}
                    {sLink.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}
