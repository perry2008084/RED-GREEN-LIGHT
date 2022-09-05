import { PAGE_MODE_NORMAL, SWITCH_MODE } from "../constants";
import { useNavsDispatch } from "../store/NavContext";

const EditBtns = () => {
  const dispatch = useNavsDispatch();

  const cancel = () => {
    switchToNormalMode();
  };

  const save = () => {
    switchToNormalMode();
  };

  const switchToNormalMode = () => {
    dispatch({
      type: SWITCH_MODE,
      mode: PAGE_MODE_NORMAL,
    });
  };

  return (
    <div>
      <div className="flex gap-3 justify-center">
        <button
          className="w-24 h-8 rounded bg-slate-300 hover:bg-slate-400"
          onClick={cancel}
        >
          取消
        </button>
        <button
          className="w-24 h-8 rounded bg-sky-300 hover:bg-sky-500"
          onClick={save}
        >
          保存
        </button>
      </div>
    </div>
  );
};

export default EditBtns;
