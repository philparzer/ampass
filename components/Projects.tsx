import { projects } from '../data/projects'

export default function Projects () {
    return (
        <div>
            {projects && projects.map((project, i:number) => (
                <span key={i} className="text-[35px] flex flex-wrap lg:inline lg:text-[100px]  font-display font-var-heading tracking-tight leading-[1em] text-white ">
                <a  href={project.link} className="hover:text-lagoon-300 uppercase lg:break-all">{project.name}</a>
                <span className="text-lagoon-500 hidden lg:inline-block px-2 -translate-y-2"> | </span>
                {i === projects.length - 1
                
                && <span className="inline-block w-full pl-2 lg:pl-0 lg:w-auto relative"><span className="hidden lg:inline">...</span> <span className="lg:absolute top-0 left-0 text-xs font-mono leading-normal tracking-normal pt-4">hier ist noch Platz</span></span>
                
                }
                </span>
            ))}
        </div>
    )
}