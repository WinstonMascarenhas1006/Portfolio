import { HEADER_ARTS } from './headerArts'

type ToolHeaderBackgroundProps = {
  slug: string
}

export default function ToolHeaderBackground({ slug }: ToolHeaderBackgroundProps) {
  const Art = HEADER_ARTS[slug]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1220] via-[#111827] to-[#18181b]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="tool-header-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#A5E9FF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tool-header-grid)" />
      </svg>

      {Art && (
        <div className="absolute inset-y-0 right-0 w-[62%] opacity-[0.38] sm:opacity-[0.42]">
          <Art className="h-full w-full object-cover" />
        </div>
      )}

      {/* Keep title area readable — art stays on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 from-35% via-zinc-900/88 via-55% to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent" />
    </div>
  )
}
