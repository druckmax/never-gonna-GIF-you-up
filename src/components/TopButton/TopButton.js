import "./TopButton.scss";
import {IoIosArrowUp} from 'react-icons/io'

export default function TopButton() {
  return (
    <div>
      <button
        className={"scroll-to-top"}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}
