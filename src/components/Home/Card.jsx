import { ClipboardListIcon } from "@heroicons/react/outline";

const Card = () => {
  return (
    <div className="card">
      <div className="card-img ">
        <ClipboardListIcon className="w-12 h-12 text-white" />
      </div>
      <div className="card-text">
        <h1>Heading 1</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          voluptatem eos nemo in vel
        </p>
      </div>
    </div>
  );
};

export default Card;
