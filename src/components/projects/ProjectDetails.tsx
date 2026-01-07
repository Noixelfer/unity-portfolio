import StoreLinks from "./StoreLinks"

export default function ProjectDetails({ project }) {
    return (
        <div className="rounded-xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold">{project.title}</h2>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                    <span
                        key={tech}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm"
                    >
            {tech}
          </span>
                ))}
            </div>
            
            <p className="mt-4 text-white/80">
                {project.longDescription}
            </p>

            {/* Store links */}
            <StoreLinks stores={project.stores} />

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
