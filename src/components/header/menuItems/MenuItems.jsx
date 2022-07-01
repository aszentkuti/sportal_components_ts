import React from 'react'
import MenuItem from './menuItem/MenuItem'

function MenuItems({items}) {
  return (
    <div className="ml-auto hidden xl:flex">
        {items.map((item,index) => <MenuItem key={`headermenu-item-${index}`} item={item}/>)}
    </div>
  )
}

export default MenuItems