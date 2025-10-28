"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function MenuItem({ title, href }: { title: string, href: string }) {
    const pathname = usePathname();
    return (
        <li>
            <Link href={href} className={`rounded-full px-4 py-1 hover:bg-white hover:text-black ${pathname == href ? 'bg-white  text-black' : ''}`}>{title}</Link>
        </li>
    )
}

function Menu() {
    return (
        <ul className="flex items-center gap-6 align-middle font-mono">
            <MenuItem title="Home" href="/" />
            <MenuItem title="Projects" href="/projects" />
        </ul>
    )
}

export default function Header() {
    return (
        <div className="flex justify-between items-center align-middle">
            <div>
                <Link href="/" className="font-bold">Rodrigo Cabral</Link>
            </div>
            <Menu />
        </div>
    )
}
