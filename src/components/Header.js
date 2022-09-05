import { PAGE_MODE_EDIT, SWITCH_MODE } from "../constants";
import { useNavsDispatch } from "../store/NavContext";

const Header = () => {
  const dispatch = useNavsDispatch();

  const settingHandle = () => {
    dispatch({
      type: SWITCH_MODE,
      mode: PAGE_MODE_EDIT,
    });
  };

  return (
    <div className="flex items-center">
      <h1 className="inline-block my-3 text-2xl text-sky-500">
        Red Green Light
      </h1>
      <p className="inline-block ml-3 text-sm">红绿灯导航</p>
      <p className="flex-1"></p>
      <i
        className="inline-block bg-sky-300 text-center rounded-full w-8 h-8 leading-8 justify-self-end cursor-pointer"
        onClick={settingHandle}
      >
        S
      </i>
    </div>
  );
};

export default Header;
