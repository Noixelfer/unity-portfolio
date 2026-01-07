import { useState } from "react"
import { projects } from "../data/projectData"
import ProjectList from "../components/project/ProjectsList"
import ProjectDetails from "../components/project/ProjectDetails"

export default function ProjectsSection() {
    const [selectedId, setSelectedId] = useState(projects[0].id)

    const selectedProject = projects.find(
        p => p.id === selectedId
    )!

    return (
        <section className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                <ProjectList
                    projects={projects}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                />
                <ProjectDetails project={selectedProject} />
            </div>
        </section>
    )
}