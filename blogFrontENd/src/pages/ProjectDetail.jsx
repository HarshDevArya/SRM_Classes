import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  return (
    <>
      <h1>Title</h1>
      <p>Cover Image</p>
      <p>Author</p>
      <p>Description</p>
    </>
  );
}
