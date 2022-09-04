import { useNavs } from "../store/NavContext";
import NavItem from "./NavItem";

const NavList = () => {
  const data = useNavs();
  const activeCategory = data.activeCategory;
  const nav = data.navs.find(nav => nav.categoryId === activeCategory);

  return nav.content.map((category, index) => (
    <NavItem
      key={index}
      title={category.title}
      links={category.links}
    ></NavItem>
  ));
};

export default NavList;
