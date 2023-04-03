import { ItemsType } from "../../types/ItemsType"

type PropTypes = {
  item: ItemsType
}


export const MenuItem: React.FC<PropTypes> = ({ item }) => {
  return (
    <div className='flex space-x-4 items-center'>
      {item.icon}
      <span className='text-medium-gray hover:text-almost-black cursor-pointer'>{item.text}</span>
    </div>
  )
}
