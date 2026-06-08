import { useEffect, useRef, useState } from "react"
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
    const getInitialProjectId = () => {
        if (typeof window === "undefined") return projects[0].id

        const projectId = new URLSearchParams(window.location.search).get("project")
        return projects.some((project) => project.id === projectId)
            ? projectId
            : projects[0].id
    }

    const [selectedId, setSelectedId] = useState(getInitialProjectId)

    /* refs for drag scrolling */
    const carouselRef = useRef<HTMLDivElement | null>(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const selectedProject = projects.find((p) => p.id === selectedId) ?? projects[0]

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

    useEffect(() => {
        const url = new URL(window.location.href)
        url.searchParams.set("project", selectedId)
        window.history.replaceState({}, "", url)
    }, [selectedId])

    useEffect(() => {
        const carousel = carouselRef.current
        const selectedCard = carousel?.querySelector<HTMLElement>(`[data-project-id="${selectedId}"]`)

        selectedCard?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        })
    }, [selectedId])

    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-0">

            {/* HORIZONTAL CAROUSEL */}
            <div
                ref={carouselRef}
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
                    <div key={project.id} data-project-id={project.id}>
                        <ProjectCard
                            project={project}
                            index={index}
                            selected={project.id === selectedId}
                            onClick={() => setSelectedId(project.id)}
                        />
                    </div>
                ))}
            </div>

            {/* DETAILS PANEL */}
            <ProjectDetails project={preparedProject} />
        </div>
    )
}
