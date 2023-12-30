import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const Blogs = props.Blogs;

    return (
        <div className="blog-list">
            {Blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;