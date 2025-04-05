import { blogPosts } from "../data/blog-posts";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="relative z-10">Latest Articles</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary dark:bg-blue-400"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span className="mr-2"><i className="far fa-calendar-alt"></i></span>
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-primary dark:hover:text-blue-400 transition-colors">
                  <a href={post.url}>{post.title}</a>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>
                <a href={post.url} className="inline-flex items-center text-primary dark:text-blue-400 hover:underline">
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary dark:border-blue-500 text-primary dark:text-blue-400 font-medium rounded-lg hover:bg-primary/5 dark:hover:bg-blue-900/20 transition-colors"
          >
            View All Articles <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
