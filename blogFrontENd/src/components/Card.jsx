import { Link } from "react-router-dom";

export default function Card({ blogs, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {blogs.projects.map((blog) => {
        return (
          <div className="bg-amber-200 p-4 rounded-xl w-full">
            {blog.coverUrl ? (
              <img src={blog.coverUrl} alt={blog.title} />
            ) : (
              <div
                className="card-img-top flex items-center justify-center"
                style={{
                  height: "12rem",
                  background:
                    "linear-gradient(to right, rgb(79, 70, 229), rgb(147, 51, 234))",
                }}>
                <h3 className="text-white fw-bold mb-0 text-4xl flex items-center justify-center ">
                  C
                </h3>
              </div>
            )}

            <h1 className="text-xl font-bold">{blog.title}</h1>
            <p className="text-gray-500 border-b-2 border-gray-500 pb-2">
              {blog.description.trim().slice(0, 100)}...
            </p>
            <Link
              to={`/projectdetail/${blog._id}`}
              className=" text-blue-500 underline py-2 rounded-md">
              Read More
            </Link>
          </div>
        );
      })}
    </>
  );
}
