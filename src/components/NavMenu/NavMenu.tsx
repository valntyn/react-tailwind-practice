import { ItemsType } from "../../types/ItemsType"
import { MenuItem } from "../MenuItem"

type PropTypes = {
  items: ItemsType[]
}

export const NavMenu: React.FC<PropTypes> = ({ items = [] }) => {
  return (
    <div className="flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30">
      {items.map(item => (
        <MenuItem item={item} />
      ))}
    </div>
  )
}
