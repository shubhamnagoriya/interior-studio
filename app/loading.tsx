export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-background px-margin-mobile">
      <div className="flex flex-col items-center gap-6">
        <span className="font-display-lg text-2xl md:text-3xl text-on-surface tracking-tighter animate-pulse">
          STUDIO
        </span>
        <div className="w-16 h-[1px] bg-outline-variant/50 relative overflow-hidden">
          <div className="w-8 h-full bg-tertiary absolute left-0 animate-[shimmer_1.5s_infinite_ease-in-out]" />
        </div>
      </div>
    </div>
  );
}
