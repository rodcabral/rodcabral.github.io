import Layout from "./components/layout"
import Link from "next/link"

function Focus({ txt }: { txt: string }) {
    return (
        <span className="text-green-700 selection:text-white">{txt}</span>
    )
}

function check_social(social: string) {
    switch (social) {
        case "github":
            return (
                <span className="cursor-pointer outline-none"><svg fill="currentColor" viewBox="0 0 25 25" aria-hidden="true" className="size-6"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg></span>
            )
        case "x":
            return (
                <span className="cursor-pointer outline-none"><svg fill="currentColor" viewBox="0 0 25 25" aria-hidden="true" className="size-6"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path></svg></span>
            )
    }
}

function SocialLink({ social, title, href }: { social: string, title: string, href: string }) {
    return (
        <Link href={href} target="_blank" className="duration-200 hover:border-gray-100 flex gap-1 items-center p-2 border-1 border-gray-500 rounded-full">
            {
                check_social(social)
            }
            <p className="text-sm text-gray-300">{title}</p>
        </Link>
    )
}

export default async function Home() {
    return (
        <Layout>
            <div className="flex flex-col gap-5 text-[15px]">
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-[17px]">Hi, I'm Rodrigo.</h4>
                    <p className="text-gray-300">I'm a Programmer from Brazil, dedicated to creating high-performance code.</p>
                </div>
                <p className="text-gray-300 text-base/loose">I am enthusiastic about building projects that solve real-world problems. Mostly working with <Focus txt="Typescript" />, <Focus txt="C" />, <Focus txt="C++" /> and <Focus txt="Python" />, but I always enjoy learning new technologies and languages.</p>

                <p className="text-gray-300"><Link href="/projects" className="underline decoration-green-700">Projects</Link> related to Low-Level, Computer Graphics, Machine Learning and more.</p>

                <ul className="flex gap-3 items-center">
                    <li>
                        <SocialLink social="github" href="https://github.com/rodcabral" title="rodcabral" />
                    </li>
                    <li>
                        <SocialLink social="x" href="https://x.com/itsrodcabral" title="itsrodcabral" />
                    </li>
                </ul>
            </div >
            <div className="border-b-[1px] border-gray-900 py-5">
            </div>
            <div className="mt-5 flex flex-col gap-3">
                <p className="text-xs italic text-gray-700">"What I cannot create, I do not understand." - Richard Feynman</p>
                <p className="text-xs italic text-gray-700">"If you wish to make an apple pie from scratch, you must first invent the universe." - Carl Sagan</p>
            </div>
        </Layout >
    )
}
