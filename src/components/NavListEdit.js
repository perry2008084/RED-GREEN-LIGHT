import { MOCK_DATA } from "../api";
import NavItemEdit from "./NavItemEdit";

const NavListEdit = () => {
  const data = MOCK_DATA;

  return data.map((category, index) => (
    <NavItemEdit
      key={index}
      title={category.title}
      links={category.links}
    ></NavItemEdit>
  ));
};

export default NavListEdit;
