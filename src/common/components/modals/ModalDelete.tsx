import Modal from "./Modal";
import TrashIcon from "../icons-new/TrashIcon";

export default function ModalDelete({
  open = false,
  setOpen,
  setOpenConfirm = null,
  message = [],
  tittle = "",
}) {
  const upprerLowerCace = (input: string) => {
    let temp = input.split(" ");
    let str = "";
    temp.forEach((item, ind) => {
      let newString = "";
      for (let i = 0; i < item.length; i++) {
        if (i === 0) {
          newString += item[i].toUpperCase();
        } else newString += item[i];
      }

      str += " ";

      str += newString;
    });

    return str;
  };
  return (
    <Modal open={open}>
      <div className="w-[430px] flex flex-col gap-8 items-center">
        <div className="flex items-center justify-center w-[150px] h-[150px] bg-[#F04438] rounded-full border-[8px] border-[#E9EEF5]">
          <TrashIcon className="w-[80px] h-[80px]" />
        </div>
        <div className="flex gap-2 items-center flex-col text-center">
          <span className="text-[#2D2A2A] text-[24px] font-semibold">
            {upprerLowerCace(tittle)}
          </span>
          {message.map((item, i) => {
            return <span key={i}>{item}</span>;
          })}
        </div>

        <div className="flex w-full items-end gap-4">
          <button
            className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] border border-[#B8B6B6] rounded text-[#514E4E] text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Batal
          </button>
          <button
            className="flex items-center justify-center flex-1 gap-2 h-[46px] px-[20px] bg-[#F04438] rounded text-white text-sm font-semibold"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                setOpenConfirm(true);
              }, 100);
            }}
          >
            Ya, Hapus
          </button>
        </div>
      </div>
    </Modal>
  );
}
