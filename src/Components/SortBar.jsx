const SortBar = ({ setSearchParams }) => {
  const toggleOrder = () => {};

  return (
    <div className="sort-by">
      <p>Sort by:</p>
      <div className="sort-queries">
        <button
          onClick={() => {
            setSearchParams({ sort_by: "created_at" });
          }}
        >
          Date
        </button>
        <button
          onClick={() => {
            setSearchParams({ sort_by: "comment_count" });
          }}
        >
          Comments
        </button>
        <button
          onClick={() => {
            setSearchParams({ sort_by: "votes" });
          }}
        >
          Votes
        </button>
      </div>
      <button className="order" onClick={toggleOrder}>
        Change order Acending/Descending
      </button>
    </div>
  );
};

export default SortBar;
