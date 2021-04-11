import {
  Link,
} from "react-router-dom";

export default function DashBtn({ name, link }) {
  return (
    <Link to={"/" + link}>
      <div className="col-span-1 py-4">
        <p className="">{name}</p>
      </div>
    </Link>
  )
}