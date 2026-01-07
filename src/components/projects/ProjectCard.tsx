export default function ProjectCard({
                                        project,
                                        selected,
                                        onClick,
                                        index,
                                    }) {
    return (
        <button
            onClick={onClick}
            className={`
    group relative flex-shrink-0
    w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]
    aspect-[3/2]
    overflow-hidden rounded-xl
    shadow-xl transition-all
    ${selected ? "ring-2 ring-[#7836cf]" : ""}
  `}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-6 text-white">
                <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 hidden sm:block text-sm text-gray-200">
                    {project.shortDescription}
                </p>
            </div>
        </button>
    )
}