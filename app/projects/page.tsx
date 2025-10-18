import Layout from "../components/layout";
import Link from "next/link"

function ProjectContainer({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col selection:text-white">
            <h4 className="text-2xl font-bold font-mono text-green-700">{title}</h4>
            <ul className="flex flex-col gap-3 mt-3">
                {children}
            </ul>
        </div>

    )
}

function ProjectItem({ name, about }: { name: string, about: string }) {
    return (
        <li>
            <Link className="flex gap-1 font-mono items-center" href={`https://github.com/rodcabral/${name}`} target="_blank">
                <p className="text-lg underline decoration-green-700">{name}</p>
                <span>:</span>
                <p>{about}</p>
            </Link>
        </li>
    )
}

export default function Projects() {
    return (
        <Layout>
            <div className="flex flex-col gap-10">
                <ProjectContainer title="Tools/Systems">
                    <ProjectItem name="---" about="---"></ProjectItem>
                    <ProjectItem name="---" about="---"></ProjectItem>
                </ProjectContainer>
                <ProjectContainer title="Machine Learning">
                    <ProjectItem name="---" about="---"></ProjectItem>
                    <ProjectItem name="---" about="---"></ProjectItem>
                </ProjectContainer>
                <ProjectContainer title="Full-Stack">
                    <ProjectItem name="---" about="---"></ProjectItem>
                    <ProjectItem name="---" about="---"></ProjectItem>
                </ProjectContainer>
                <ProjectContainer title="Computer Graphics">
                    <ProjectItem name="---" about="---"></ProjectItem>
                    <ProjectItem name="---" about="---"></ProjectItem>
                </ProjectContainer>
            </div>
        </Layout>
    )
}
