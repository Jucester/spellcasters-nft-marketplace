import { FC } from "react";

const CollectionCard: FC<any> = ({ collection }) => {
  return (
    <>
      <div className="px-3 w-full md:w-6/12">
        <a href="#" className="block group overflow-hidden relative rounded-xl">
          <img
            src={collection.image}
            className="group-hover:opacity-90 w-full"
            alt="..."
            width="750"
            height="450"
          />
          <div className="absolute bg-gray-900 bg-opacity-75 bottom-0 flex inset-x-0 items-center justify-between p-4 text-white sm:px-6">
            <h3 className="font-bold"> {collection.name} </h3>
            <span className="italic opacity-75">ETH 100000</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default CollectionCard;
