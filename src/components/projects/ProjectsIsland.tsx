import { useState, useRef } from "react"
import { projects } from "../../data/projectData"
import ProjectCard from "./ProjectCard"
import ProjectDetails from "./ProjectDetails"

/* Store priority for sorting */
const STORE_PRIORITY = [
    "steam",
    "playstation",
    "xbox",
    "nintendo",
    "ios",
    "android",
    "web",
]

export default function ProjectsIsland() {
    const [selectedId, setSelectedId] = useState(projects[0].id)

    /* refs for drag scrolling */
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const selectedProject = projects.find(
        (p) => p.id === selectedId
    )

    const preparedProject = {
        ...selectedProject,
        stores: selectedProject.stores
            ? [...selectedProject.stores].sort(
                (a, b) =>
                    STORE_PRIORITY.indexOf(a.platform) -
                    STORE_PRIORITY.indexOf(b.platform)
            )
            : [],
    }

    /* Mouse drag handlers */
    const handleMouseDown = (e) => {
        const container = e.currentTarget
        isDragging.current = true
        startX.current = e.pageX
        scrollLeft.current = container.scrollLeft
    }

    const handleMouseMove = (e) => {
        if (!isDragging.current) return
        const container = e.currentTarget
        const dx = e.pageX - startX.current
        container.scrollLeft = scrollLeft.current - dx
    }

    const stopDragging = () => {
        isDragging.current = false
    }

    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-3 sm:px-6 lg:px-8">

            {/* HORIZONTAL CAROUSEL */}
            <div
                className="
          flex gap-6 overflow-x-auto px-2 pb-6
          no-scrollbar select-none
          cursor-grab active:cursor-grabbing
        "
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onWheel={(e) => {
                    e.currentTarget.scrollLeft += e.deltaY
                }}
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        selected={project.id === selectedId}
                        onClick={() => setSelectedId(project.id)}
                    />
                ))}
            </div>

            {/* DETAILS PANEL */}
            <ProjectDetails project={preparedProject} />
        </div>
    )
}