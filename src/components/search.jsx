export function Search({ ...rest }) {
  return (
    <input
      className="w-full h-14 bg-[#262529] px-4 py-3 rounded outline-none text-[#948f99]"
      type="text"
      placeholder="Pesquisar pelo título"
      {...rest}
    />
  )
}
