import Navbar from "@/components/navbar"
import '../app/globals.css'
import blog_title from "@/data/blog_title"

export default function Blog({ blog_list }) {
    return (
        <>
            <Navbar />
            <div className="flex-col p-10">
                <h className="font-bold text-2xl">Blogs</h>
                <div>
                    {
                        blog_title.map(
                            (blog, index) => <div key={index} className="text-xl my-4 p-6 bg-blue-100 rounded-full">{blog}</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}