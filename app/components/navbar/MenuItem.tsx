'use client'

interface MenuItemProps {
  onClick: () => void
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="p-3 transition hover:bg-gray-300/50 rounded-2xl"
    >
      {label}
    </div>
  )
}

export default MenuItem
