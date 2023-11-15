import allHighlight from "../../Picture/all-over-highlight.png";
import defaultAbs from "../../Picture/default-abs.png";
import epigastriumHighlight from "../../Picture/epigastrium-highlight.png";
import llqHighlight from "../../Picture/llq-highlight.png";
import luqHighlight from "../../Picture/luq-highlight.png";
import rlqHighlight from "../../Picture/rlq-highlight.png";
import ruqHighlight from "../../Picture/ruq-highlight.png";
import suprapubicHighlight from "../../Picture/suprapubic-highlight.png";
import umbilicusHighlight from "../../Picture/umbilicus-highlight.png";

import epigastriumActive from "../../Picture/epigastrium-active.png";
import llqActive from "../../Picture/llq-active.png";
import luqActive from "../../Picture/luq-active.png";
import rlqActive from "../../Picture/rlq-active.png";
import ruqActive from "../../Picture/ruq-active.png";
import suprapubicActive from "../../Picture/suprapubic-active.png";
import umbilicusActive from "../../Picture/umbilicus-active.png";

const StomachPicture = ({ partClicked, setPartClicked }) => {
  return (
    <div className="relative">
      <img src={defaultAbs} alt="#" />
      <>
        {(partClicked === "epi" || partClicked === "all") && (
          <StomachPart
            partImg={epigastriumHighlight}
            caption={epigastriumActive}
            allClicked={partClicked === "all"}
          />
        )}
        {(partClicked === "llq" || partClicked === "all") && (
          <StomachPart
            partImg={llqHighlight}
            caption={llqActive}
            allClicked={partClicked === "all"}
          />
        )}
        {(partClicked === "luq" || partClicked === "all") && (
          <StomachPart
            partImg={luqHighlight}
            caption={luqActive}
            allClicked={partClicked === "all"}
          />
        )}
        {(partClicked === "rlq" || partClicked === "all") && (
          <StomachPart
            partImg={rlqHighlight}
            caption={rlqActive}
            allClicked={partClicked === "all"}
          />
        )}
        {(partClicked === "ruq" || partClicked === "all") && (
          <StomachPart
            partImg={ruqHighlight}
            caption={ruqActive}
            allClicked={partClicked === "all"}
          />
        )}
        {(partClicked === "sup" || partClicked === "all") && (
          <StomachPart
            partImg={suprapubicHighlight}
            caption={suprapubicActive}
            allClicked={partClicked === "all"}
          />
        )}
        {(partClicked === "umb" || partClicked === "all") && (
          <StomachPart
            partImg={umbilicusHighlight}
            caption={umbilicusActive}
            allClicked={partClicked === "all"}
          />
        )}
        {partClicked === "all" && (
          <img src={allHighlight} className="absolute top-0" alt="#" />
        )}
      </>

      <>
        <button
          className="absolute top-[36%] left-[43%] h-[10%] w-[10%]"
          onClick={() => setPartClicked("epi")}
        />
        <button
          className="absolute top-[42%] left-[32%] h-[10%] w-[10%]"
          onClick={() => setPartClicked("ruq")}
        />
        <button
          className="absolute top-[42%] right-[36%] h-[10%] w-[10%]"
          onClick={() => setPartClicked("luq")}
        />
        <button
          className="absolute bottom-[36%] left-[32%] h-[10%] w-[10%]"
          onClick={() => setPartClicked("rlq")}
        />
        <button
          className="absolute bottom-[36%] right-[36%] h-[10%] w-[10%]"
          onClick={() => setPartClicked("llq")}
        />
        <button
          className="absolute bottom-[32%] left-[43%] h-[10%] w-[10%]"
          onClick={() => setPartClicked("sup")}
        />
        <button
          className="absolute top-[49%] left-[43%] h-[8%] w-[10%] rounded-full"
          onClick={() => setPartClicked("umb")}
        />
        <button
          className="absolute bottom-[4%] left-[32%] h-[9%] w-[32%] rounded-full"
          onClick={() => setPartClicked("all")}
        />
      </>
    </div>
  );
};

const StomachPart = ({ partImg, caption, allClicked }) => {
  return (
    <>
      <img src={partImg} className="absolute top-0" alt="#" />
      {!allClicked && <img src={caption} className="absolute top-0" alt="#" />}
    </>
  );
};

export default StomachPicture;
