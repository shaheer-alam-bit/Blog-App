import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog =  {title,body,author};
        setLoading(true);
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}/>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding Blog....</button>}
            </form>
        </div>
    );
}

export default Create;