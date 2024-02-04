export function Button({ isActive, title, icon: Icon, ...rest }) {
  return (
    <button
      className={
        isActive
          ? `w-full flex items-center justify-center gap-2  bg-[#0d0c0f] hover:bg-[#0d0c0f]/90 text-[#ff859b] font-bold px-4 py-3 rounded`
          : `w-full flex items-center justify-center gap-2 bg-[#ff859b] hover:bg-[#df5d77] text-[#1C1B1E] font-bold px-4 py-3 rounded`
      }
      {...rest}
    >
      {Icon && <Icon className=" w-5 h-5 text-[#1C1B1E]" />}
      {title}
    </button>
  )
}
