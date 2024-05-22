const Aside = () => {
  return (
    <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
      <div className="flex items-center gap-2 group">
            <div className="rounded-full w-3 h-3 bg-slate-400 group-hover:bg-red-500"></div>
            <div className="rounded-full w-3 h-3 bg-slate-400 group-hover:bg-green-500"></div>
            <div className="rounded-full w-3 h-3 bg-slate-400 group-hover:bg-yellow-500"></div>
          </div>

    </aside>
  )
}

export default Aside