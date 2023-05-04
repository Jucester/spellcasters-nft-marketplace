const Search = () => {
  return (
    <>
      <form>
        <div className="bg-gray-600 border-gray-600 flex overflow-hidden">
          <input
            className="appearance-none flex-1 outline-none px-4 py-1 text-gray-600 w-full"
            placeholder="Find your next NFT"
            type="text"
          />
          <button
            type="submit"
            className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-2 rounded-full text-white to-primary-400"
            aria-label="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="1.25em"
              height="1.25em"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
              </g>
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
