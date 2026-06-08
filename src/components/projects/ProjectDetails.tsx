import StoreLinks from "./StoreLinks"
import ProjectVideoSwitcher from "./ProjectVideoSwitcher"

export default function ProjectDetails({ project }) {
    const formatNumber = (n: number) =>
        new Intl.NumberFormat("en-US").format(n)

    return (
        <div className="rounded-xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold">{project.title}</h2>

            {project.youtubeId && (
                <ProjectVideoSwitcher
                    youtubeId={project.youtubeId}
                    videos={project.videos}
                />
            )}

            {(project.stores?.length || project.totalDownloads) && (
                <div className="mt-4 rounded-lg border border-white/15 bg-white/5 p-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {project.stores?.length > 0 && (
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                                    Available on:
                                </h3>
                                <div className="mt-2">
                                    <StoreLinks stores={project.stores} />
                                </div>
                            </div>
                        )}

                        {project.totalDownloads && (
                            <div className="md:text-right">
                                <div className="text-xs uppercase tracking-wide text-white/60">
                                    Total Downloads
                                </div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-300">
                                    {project.totalDownloads}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Overview */}
            {project.longDescription?.overview && (
                <p className="mt-4 text-white/80">{project.longDescription.overview}</p>
            )}

            {/* Responsibilities */}
            {project.longDescription?.responsibilities && (
                <div className="mt-4">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                        Responsibilities
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-white/80">
                        {project.longDescription.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Impact */}
            {project.longDescription?.impact && (
                <div className="mt-4">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                        Impact
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-white/80">
                        {project.longDescription.impact.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Optional source code */}
            {project.sourceUrl && (
                <div className="mt-4">
                    <a
                        href={project.sourceUrl}
                        target="_blank"
                        className="text-sm underline text-white/70 hover:text-white"
                    >
                        View Source Code
                    </a>
                </div>
            )}
        </div>
    )
}
