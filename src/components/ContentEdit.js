import { PAGE_MODE_NORMAL } from "../constants";
import NavListEdit from "./NavListEdit";

const ContentEdit = ({ changeMode }) => {
  const cancel = () => {
    if (changeMode) {
      changeMode(PAGE_MODE_NORMAL);
    }
  };

  const save = () => {
    if (changeMode) {
      changeMode(PAGE_MODE_NORMAL);
    }
  };

  return (
    <div>
      <div>
        <NavListEdit></NavListEdit>
        <button className="my-3 px-6 py-3 w-52 mx-auto bg-sky-400 rounded-xl items-center">+</button>
      </div>
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

export default ContentEdit;
