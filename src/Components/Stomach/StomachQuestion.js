import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StomachPicture from "./StomachPicture";

const StomachQuestion = () => {
  const navigate = useNavigate();
  const [partClicked, setPartClicked] = useState("");

  return (
    <>
      <div className="flex flex-col items-center pt-4 w-72 md:w-96 rounded-lg shadow-lg shadow-gray-400 mb-1">
        <div className="text-lg md:text-2xl">ปวดท้องที่บริเวณใดมากที่สุด ?</div>
        <StomachPicture
          partClicked={partClicked}
          setPartClicked={setPartClicked}
        />
      </div>
      {partClicked ? (
        <button
          className="w-72 md:w-96 rounded-xl border-black border-4 py-2 px-4 mt-4"
          onClick={() => navigate("/hand")}
        >
          ต่อไป
        </button>
      ) : (
        <button
          className="w-72 md:w-96 rounded-xl bg-slate-100 text-gray-400 py-2 px-4 mt-4"
          disabled={true}
        >
          ต่อไป
        </button>
      )}
    </>
  );
};

export default StomachQuestion;
