import { Link } from "react-router-dom";

export default function DashBtn({ name, link, pathNow }) {
  if (pathNow === "/" + link) {
    return (
      <div className="col-span-1 py-4">
        <p className="">{name}</p>
      </div>
    );
  } else
    return (
      <Link to={"/" + link}>
        <div className="col-span-1 py-4">
          <p className="text-gray-500">{name}</p>
        </div>
      </Link>
    );
}
