import urbanStyle from "../assets/img-projects/urbanStyle.png";
import imgNote from "../assets/img-projects/note-app.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";

export const proyectos = [
  {
    titulo: "React Store",
    imagen: ReactEcommerce.src,
    tecnologias: ["React", "Tailwind", "Node.js" ,"Express", "MongoDB", "jwt"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
  },
  {
    titulo: "E-commerce Urban Style",
    descripcion: "Short project description.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
  },
  {
    titulo: "Organization App",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
  },
  {
    titulo: "REST API for E-commerce",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
  },
];
