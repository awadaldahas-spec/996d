interface PlaceholderMediaProps {
  label: string;
  className?: string;
}

export default function PlaceholderMedia({ label, className = "" }: PlaceholderMediaProps) {
  return (
    <div className={`placeholder-media flex items-center justify-center ${className}`}>
      <span className="text-bn-cream/70 text-xs sm:text-sm tracking-[0.2em] uppercase text-center px-4">
        {label}
      </span>
    </div>
  );
}
