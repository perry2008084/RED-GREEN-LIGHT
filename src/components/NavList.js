import { MOCK_DATA } from "../api";
import NavItem from "./NavItem";

const NavList = () => {
  const data = MOCK_DATA;

  return data.map((category, index) => (
    <NavItem
      key={index}
      title={category.title}
      links={category.links}
    ></NavItem>
  ));
};

export default NavList;
