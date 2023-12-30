import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const {data:Blogs, isLoading, isError} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isError && <div>{isError}</div>}
            {isLoading && <div>Loading....</div>}
            {Blogs && <BlogList Blogs={Blogs}/>}
        </div>
    );
}

export default Home;