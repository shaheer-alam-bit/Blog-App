import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const {data:Blogs, isLoading, isError} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + Blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className='Blog-Details'>
            {isLoading && <div>Loading....</div>}
            {isError && <div>{isError}</div>}
            {Blogs && (<article>
                <h2>{Blogs.title}</h2>
                <p>Written By {Blogs.author}</p>
                <div className='blog-body'>
                    {Blogs.body}
                </div>
                <button onClick={handleDelete}>Delete</button>
            </article>)}
        </div>
    )
}

export default BlogDetail;