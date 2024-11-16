import "../About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function There() {
  return (
    <div className="video">
      <div className="text">
        <h1>
          When a mans stomach is full it makes no difference whether he is rich
          or poor.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus.
        </p>
        <button>
          <span style={{marginRight:"10px"}}>
            <FontAwesomeIcon icon={faPlay} />
          </span>
          Watch Our Story
        </button>
      </div>
    </div>
  );
}

export default There;
