import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'

export function Note({ data, ...rest }) {
  const rating = []

  for (let i = 1; i <= 5; i++) {
    if (i <= data.rating) {
      rating.push(<VscStarFull key={i} />)
    } else {
      rating.push(<VscStarEmpty key={i} />)
    }
  }
  return (
    <div className="bg-[#282124] p-8 rounded space-y-4" {...rest}>
      <h2 className="text-2xl text-white mb-2">{data.title}</h2>
      <div className="flex">
        <span className="text-[#ff859b] flex">{rating}</span>
      </div>
      <p className="text-[#999591] line-clamp-3">{data.description}</p>

      <footer className="flex flex-col md:flex-row gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag.id}
            className="bg-[#312e38] text-xs text-white p-1 rounded w-fit px-2"
          >
            {tag.name}
          </span>
        ))}
      </footer>
    </div>
  )
}
