export function Input({ icon: Icon, ...rest }) {
  return (
    <div className="flex items-center gap-3 h-14 bg-[#262529] px-4 py-3 rounded">
      {Icon && <Icon className="w-5 h-5 text-[#948f99]" />}
      <input
        className="w-full h-full bg-transparent outline-none px-2 text-[#948f99] placeholder:text-base"
        {...rest}
      />
    </div>
  )
}
