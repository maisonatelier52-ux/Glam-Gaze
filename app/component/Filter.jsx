const FILTERS = ["All", "Photos", "Videos"];

export default function FilterTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-1 border border-amber-600/20 p-1 rounded-sm">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-5 py-2 text-[10px] tracking-[0.28em] uppercase transition-all rounded-sm ${
            active === f
              ? "bg-amber-700 text-white"
              : "text-neutral-500 hover:text-amber-700"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}