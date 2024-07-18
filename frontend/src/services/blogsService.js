const getBlogs = async () => {
    try {
        const res = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs");
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const getBlogsByCategoryId = async (categoryId) => {
    try {
        const res = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category?id=[category-id]");
        if (!res.ok) {
            throw Error(res.statusText);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        throw Error(err);
    }
}

const blogsService = {
    getBlogs,
    getBlogsByCategoryId,
};

export default blogsService;