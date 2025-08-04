interface TooltipProps {
  text: string;
  children: React.ReactNode;
}
export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <span className="relative group">
      {children}
      <span className="absolute left-0 top-full mt-1 z-10 hidden group-hover:block group-focus-within:block bg-white border border-gray-300 rounded p-2 text-xs shadow-lg w-max max-w-xs">
        {text}
      </span>
    </span>
  );
}
