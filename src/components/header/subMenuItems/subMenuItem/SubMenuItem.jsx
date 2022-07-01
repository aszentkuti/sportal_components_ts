import React from 'react'

function SubMenuItem({item}) {
  return (
    <a className="inline-block whitespace-nowrap	text-brand-red font-bold px-6 py-3 tracking-[1px] self-center dark:hover:bg-[#ebe3e712] hover:bg-[#ebe3e7] transition-colors duration-300 uppercase" href={item.url}>{item.text}</a>
  )
}

export default SubMenuItem