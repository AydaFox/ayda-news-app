const SortBar = () => {
  const toggleOrder = () => {};

  return (
    <div className="sort-by">
      <p>Sort by:</p>
      <div className="sort-queries">
        <button>Date</button>
        <button>Comments</button>
        <button>Votes</button>
      </div>
      <button className="order" onClick={toggleOrder}>
        Change order Acending/Descending
      </button>
    </div>
  );
};

export default SortBar;
