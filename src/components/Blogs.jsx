import { useEffect, useState } from "react";

const MEDIUM_RSS =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rishi.123.lalwani";

// 🔧 Utility: Extract image from Medium HTML content
const getImageFromContent = (html) => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MEDIUM_RSS)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Medium RSS", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-400">
        Loading blogs...
      </section>
    );
  }

  return (
    <section className=" px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-3 text-center">
        Blogs
      </h2>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 6).map((blog) => {
          const imageSrc =
            blog.thumbnail ||
            getImageFromContent(blog.content) ||
            "/images/blog-placeholder.jpg";

          return (
            <a
              key={blog.guid}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="
                group rounded-2xl overflow-hidden
                bg-[#0b0b12]/70 backdrop-blur-xl
                border border-white/10
                hover:border-white/20
                transition-all duration-300
              "
            >
              {/* Blog Image */}
              <div className="aspect-[16/9] overflow-hidden shrink-0">
                <img
                  src={imageSrc}
                  alt={blog.title}
                  loading="lazy"
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition-transform duration-500
                  "
                />
              </div>

              {/* Blog Content */}
              <div className="p-2 flex-1 flex flex-col">

                <p className=" text-xs text-gray-400 mb-2">
                  {new Date(blog.pubDate).toDateString()}
                </p>

                <h3 className="text-m font-semibold text-white leading-snug line-clamp-2">
                  {blog.title}
                </h3>
              </div>
            </a>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="text-center mt-3">
        <a
          href="https://medium.com/@rishi.123.lalwani"
          target="_blank"
          rel="noreferrer"
          className="
            inline-block px-6 py-3 rounded-xl
            bg-white text-black font-semibold
            hover:bg-gray-200 transition
          "
        >
          View all articles on Medium →
        </a>
      </div>
    </section>
  );
}
