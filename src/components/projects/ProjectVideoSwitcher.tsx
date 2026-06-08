import { useState } from "react"

export default function ProjectVideoSwitcher({ youtubeId, videos }) {
    const hasVideos = Array.isArray(videos) && videos.length > 0
    const [activeStart, setActiveStart] = useState(hasVideos ? videos[0].start : 0)

    const src = `https://www.youtube.com/embed/${youtubeId}?start=${activeStart}&mute=1`

    return (
        <div className="mt-6">
            {/* Video */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
                <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
                    <iframe
                        key={activeStart}
                        src={src}
                        className="h-full w-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Controls */}
            {hasVideos && (
                <div
                    className="mt-3 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto
                   flex items-center gap-2
                   overflow-x-auto whitespace-nowrap no-scrollbar px-1"
                >
                    {videos.map(video => (
                        <button
                            key={video.start}
                            onClick={() => setActiveStart(video.start)}
                            className={`shrink-0 rounded-md
                px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm
                font-medium transition
                ${
                                activeStart === video.start
                                    ? "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/40"
                                    : "bg-white/5 text-white/70 hover:bg-white/10"
                            }
            `}
                        >
                <span className="hidden sm:inline" aria-hidden>
                  ▶
                </span>{" "}
                            {video.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
