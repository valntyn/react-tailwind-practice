import classNames from 'classnames'

export const Button = ({
  children = '',
  hasBorder = false,
  isFilled = false,
}) => {
  return (
    <button
      type='button'
      className={classNames(
        'text-medium-gray px-5 py-2',
        {
          'border-2 border-almost-black rounded-lg': hasBorder,
          'text-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black': isFilled,
        }
      )}
    >
      {children}
    </button>
  )
}
