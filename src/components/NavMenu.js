import { useNavs, useNavsDispatch } from "../store/NavContext";
import { CHANGE_CATEGORY } from "../constants";

/**
 * 菜单
 */
const NavMenu = ({ mode }) => {
  const data = useNavs();
  const dispatch = useNavsDispatch();

  return (
    <>
      <ul className="flex">
        {data.navs.map((nav) => (
          <li
            className={`flex-initial w-12 mx-1 text-center cursor-pointer ${
              data.activeCategory === nav.categoryId
                ? "border-cyan-100 border-b-2 border-solid"
                : ""
            }`}
            key={nav.category}
            onClick={() =>
              dispatch({
                type: CHANGE_CATEGORY,
                activeCategory: nav.categoryId,
              })
            }
          >
            {nav.category}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
