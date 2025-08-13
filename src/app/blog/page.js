import Layouts from "../../layouts/Layouts";
import PageBanner from "../../components/PageBanner";
import { getSortedPostsData } from "../../lib/posts";

export const metadata = {
  title: 'Blog - SKYXHUB',
  description: 'Read the latest articles and insights from SKYXHUB about technology, development, and innovation.',
};

// Server Component - Pure Next.js 15 App Router
export default function BlogPage() {
  // Fetch data directly in the server component
  const posts = getSortedPostsData();

  return (
    <Layouts>
      <PageBanner pageName="Blog" pageTitle="Latest Articles" />
      
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row">
            {posts.map((post, index) => (
              <div key={index} className="col-lg-6 col-xl-4">
                <div className="mil-blog-card mil-mb-60">
                  <div className="mil-cover mil-mb-30">
                    <img src={`/img/blog/${post.id}.jpg`} alt={post.title} />
                    <div className="mil-date">
                      <div className="mil-day">{new Date(post.date).getDate()}</div>
                      <div className="mil-month">
                        {new Date(post.date).toLocaleDateString('en', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-mb-15">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h4>
                    <p>{post.excerpt || 'Blog post excerpt...'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layouts>
  );
}
