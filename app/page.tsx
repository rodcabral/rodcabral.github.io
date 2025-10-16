import Layout from "./components/layout"
import BlogTitle from "./components/Blog/title"

function Focus({ txt }: { txt: string }) {
    return (
        <span className="text-green-700 selection:text-white">{txt}</span>
    )
}

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold">Hi, I'm Rodrigo</h4>
                    <p className="text-gray-300">I'm a Software Developer from Brazil, dedicated to creating high-performance code.</p>
                </div>
                <p className="text-gray-300 text-base/loose">I am enthusiastic about building projects that solve real-world problems. Mostly working with <Focus txt="Typescript" />, <Focus txt="C" />, <Focus txt="C++" /> and <Focus txt="Python" /> to build modern software like Developer Tools or Full-Stack applications, but I always enjoy learning new technologies and languages.</p>

                <p className="text-gray-300">I'm also extremely interested in Low-Level, Computer Graphics and Machine Learning.</p>
            </div>
            <div className="mt-12">
                <h4 className="font-bold">Recent blog posts</h4>
                <div className="mt-5 flex flex-col gap-5">
                    <BlogTitle date="October 16, 25" title="Lorem ipsum dolor sit amet" />
                    <BlogTitle date="October 16, 25" title="Lorem ipsum dolor sit amet" />
                </div>
            </div>
        </Layout >
    )
}
