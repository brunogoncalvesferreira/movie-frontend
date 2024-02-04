import { Plus, X } from 'lucide-react'

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <div
      className={
        isNew
          ? 'w-fit h-12 border-2 border-[#948f99] border-dashed rounded-md flex justify-between items-center px-4 text-[#948f99]'
          : 'w-fit h-12 bg-[#282124] p-4 rounded flex justify-between items-center text-white'
      }
    >
      <input
        className="bg-transparent outline-none w-full h-full"
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? (
          <Plus className="text-[#ff859b]" />
        ) : (
          <X className="text-[#ff859b]" />
        )}
      </button>
    </div>
  )
}
