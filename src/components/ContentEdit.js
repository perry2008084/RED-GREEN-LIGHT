import { PAGE_MODE_NORMAL } from "../constants";

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
      <h2>ContentEditMode</h2>
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
