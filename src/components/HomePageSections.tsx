interface ISectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

const HomePageSections = ({ ...props }: ISectionProps) => {
  return (
    <div className="flex flex-col gap-4 mx-4 border border-gray-50 px-4 py-2 rounded-md">
      <h1 className="text-3xl font-bold">{props.title}</h1>
      {props.children}
    </div>
  )
}
export default HomePageSections
