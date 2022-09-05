import { useNavs, useNavsDispatch } from "../store/NavContext";
import { CHANGE_CATEGORY, PAGE_MODE_EDIT } from "../constants";

/**
 * 菜单
 */
const NavMenu = ({ mode }) => {
  const data = useNavs();
  const dispatch = useNavsDispatch();

  const editing = data.mode === PAGE_MODE_EDIT;

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

        {/* edit mode */}
        {
          editing && <button>新增</button>
        }
      </ul>
    </>
  );
};

export default NavMenu;
