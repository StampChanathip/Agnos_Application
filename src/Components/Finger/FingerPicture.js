import othersHighlight from "../../Picture/others-highlight.png";
import defaultFinger from "../../Picture/default-finger.png";
import dipHighlight from "../../Picture/dip-highlight.png";
import mcpHighlight from "../../Picture/mcp-highlight.png";
import pipHighlight from "../../Picture/pip-highlight.png";

import dipActive from "../../Picture/dip-active.png";
import mcpActive from "../../Picture/mcp-active.png";
import pipActive from "../../Picture/pip-active.png";

const FingerPicture = ({ partClicked, setPartClicked }) => {
  // const [partClicked, setPartClicked] = useState("");

  return (
    <div className="relative">
      <img src={defaultFinger} alt="#" />
      <>
        {partClicked === "dip" && (
          <FingerPart partImg={dipHighlight} caption={dipActive} />
        )}
        {partClicked === "mcp" && (
          <FingerPart partImg={mcpHighlight} caption={mcpActive} />
        )}
        {partClicked === "pip" && (
          <FingerPart partImg={pipHighlight} caption={pipActive} />
        )}

        {partClicked === "others" && (
          <img src={othersHighlight} className="absolute top-0" alt="#" />
        )}
      </>

      <>
        <DipButton setPartClicked={() => setPartClicked("dip")} />
        <PipButton setPartClicked={() => setPartClicked("pip")} />
        <McpButton setPartClicked={() => setPartClicked("mcp")} />

        <button
          className="absolute bottom-[1%] left-[14%] h-[9%] w-[70%] rounded-full"
          onClick={() => setPartClicked("others")}
        />
      </>
    </div>
  );
};

const DipButton = ({ setPartClicked }) => {
  return (
    <>
      <button
        className="absolute -rotate-[20deg] top-[24%] left-[21%] h-[4%] w-[6%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute top-[13%] left-[32.5%] h-[4%] w-[6.5%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute top-[9%] left-[43%] h-[3.5%] w-[7%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute top-[11.7%] left-[55%] h-[3.5%] w-[7%] rounded-full"
        onClick={setPartClicked}
      />
    </>
  );
};

const PipButton = ({ setPartClicked }) => {
  return (
    <>
      <button
        className="absolute -rotate-[20deg] top-[31.5%] left-[24%] h-[4%] w-[6%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute -rotate-[10deg] top-[23.5%] left-[33%] h-[4%] w-[7%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute top-[20%] left-[44%] h-[4%] w-[7%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute top-[21.2%] right-[37.5%] h-[4%] w-[7.5%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute rotate-[30deg] top-[41%] right-[17%] h-[4%] w-[6.5%] rounded-full"
        onClick={setPartClicked}
      />
    </>
  );
};

const McpButton = ({ setPartClicked }) => {
  return (
    <>
      <button
        className="absolute -rotate-[20deg] top-[40.5%] left-[28%] h-[5%] w-[8%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute -rotate-[15deg] top-[37%] left-[36%] h-[5%] w-[8%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute  top-[35%] left-[44.5%] h-[5%] w-[8.5%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute rotate-[10deg] top-[35%] right-[37.5%] h-[5%] w-[9%] rounded-full"
        onClick={setPartClicked}
      />
      <button
        className="absolute rotate-45 bottom-[42.5%] right-[24%] h-[5%] w-[8%] rounded-full"
        onClick={setPartClicked}
      />
    </>
  );
};

const FingerPart = ({ partImg, caption }) => {
  return (
    <>
      <img src={partImg} className="absolute top-0" alt="#" />
      <img src={caption} className="absolute top-0" alt="#" />
    </>
  );
};

export default FingerPicture;
