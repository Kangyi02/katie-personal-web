import './Blog.css'

const posts = [
  {
    title: 'What I Learned Fine-Tuning a Language Model for P4 Code Generation',
    date: 'April 2025',
    tag: 'Research',
    excerpt:
      'A deep dive into my experience as a Research Assistant at SFU, where I fine-tuned DeepSeek to automatically generate P4 network code — and what surprised me along the way.',
  },
  {
    title: 'From Mathematics to Computing Science: My Transfer Journey',
    date: 'March 2025',
    tag: 'Personal',
    excerpt:
      "How studying mathematics at Douglas College shaped the way I think about algorithms and problem-solving — and why I'm glad I took that path before jumping into CS.",
  },
  {
    title: "Building 3D Hand Models in Unity: A Beginner's Perspective",
    date: 'November 2024',
    tag: 'Tutorial',
    excerpt:
      'My experience rigging and animating hand models with Blender and Unity for human pose tracking research — complete with the mistakes I made and how I fixed them.',
  },
]

const tagColors = {
  Research: 'green',
  Personal: 'warm',
  Tutorial: 'blue',
}

export default function Blog() {
  return (
    <section id="blog" className="blog section">
      <div className="container">
        <div className="section-label">Blog</div>
        <h2 className="section-title">Thoughts & writings</h2>
        <p className="blog-sub">Coming soon — in the meantime, here's a preview of what I'll be writing about.</p>
        <div className="blog-list">
          {posts.map((post, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-card-left">
                <span className={`blog-tag tag-${tagColors[post.tag]}`}>{post.tag}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <div className="blog-card-body">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-coming">Coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
