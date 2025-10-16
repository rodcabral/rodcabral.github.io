import Link from "next/link"

function MenuItem({ title, href }: { title: string, href: string }) {
    return (
        <li className="rounded-full px-4 py-1">
            <Link href={href} className="rounded-full px-4 py-1 hover:bg-white hover:text-black">{title}</Link>
        </li>
    )
}

function Menu() {
    return (
        <ul className="flex gap-2 items-center align-middle font-mono">
            <MenuItem title="Home" href="/" />
            <MenuItem title="Blog" href="/blog" />
            <MenuItem title="Projects" href="/projects" />
        </ul>
    )
}

export default function Header() {
    return (
        <div className="flex justify-between items-center align-middle">
            <div>
                <p className="font-bold">Rodrigo Cabral</p>
            </div>
            <Menu />
        </div>
    )
}
