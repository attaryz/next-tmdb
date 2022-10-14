interface IProps {
  children: React.ReactNode
}

const Badge = ({ ...props }: IProps) => {
  return (
    <div className="text-xs bg-gray-600 text-white rounded-md px-2 py-1 mr-2">
      {props.children}
    </div>
  )
}

export default Badge
