import { Link } from "react-router-dom";

export default function Card({ elData }) {
  return (
    <div className="card w-xl h-full rounded overflow-hidden shadow-sm hover-shadow transition-shadow mt-10">
      <div
        className="card-img-top d-flex align-items-center justify-content-center"
        style={{
          height: "12rem",
          background:
            "linear-gradient(to right, rgb(79, 70, 229), rgb(147, 51, 234))",
        }}>
        <img
          className="w-full h-full object-contain"
          src={elData.image}
          alt={elData.title}
        />
      </div>
      <div className="card-body p-4">
        <h5 className="card-title text-truncate mb-2">{elData.title}</h5>
        <p className="card-text text-muted small mb-3">{elData.description}</p>
        <div className="d-flex justify-content-between align-items-center border-top pt-3">
          <div></div>
          <Link
            className="small text-primary text-decoration-none flex items-center"
            to={`/productdetail/${elData.id}`}
            data-discover="true">
            View details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right ms-1"
              aria-hidden="true">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
