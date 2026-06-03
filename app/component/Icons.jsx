export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      {direction === "left"
        ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
    </svg>
  );
}