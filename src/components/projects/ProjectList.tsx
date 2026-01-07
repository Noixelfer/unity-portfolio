import ProjectCard from "./ProjectCard"

export default function ProjectList({
                                        projects,
                                        selectedId,
                                        onSelect,
                                    }) {
    return (
        <div className="flex flex-col gap-4">
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    selected={project.id === selectedId}
                    onClick={() => onSelect(project.id)}
                />
            ))}
        </div>
    )
}
