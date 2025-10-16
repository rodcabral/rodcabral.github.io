import Layout from "../components/layout"
import BlogTitle from "../components/Blog/title"

export default function Blog() {
    return (
        <Layout>
            <h4 className="font-semibold">Blog posts</h4>
            <div className="mt-5 flex flex-col gap-5">
                <BlogTitle date="October 16, 25" title="Lorem ipsum dolor sit amet" />
                <BlogTitle date="October 16, 25" title="Lorem ipsum dolor sit amet" />
            </div>
        </Layout>
    )
}
