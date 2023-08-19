import { categories } from "../constants";
import NavLink from "./NavLink";

export default function NavLinks() {
  return (
    <div>
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={true} />
      ))}
    </div>
  );
}
