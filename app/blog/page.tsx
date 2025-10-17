import Layout from "../components/layout"
import BlogTitle from "../components/Blog/title"

export default function Blog() {
    return (
        <Layout>
            <div className="flex flex-col gap-5">
                <BlogTitle date="Oct 16, 25" title="Lorem ipsum dolor sit amet" />
                <BlogTitle date="Oct 16, 25" title="Lorem ipsum dolor" />
                <BlogTitle date="Oct 16, 25" title="Hello, World!" />
            </div>
        </Layout>
    )
}
