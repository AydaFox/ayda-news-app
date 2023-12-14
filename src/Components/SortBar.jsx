const SortBar = ({ setSearchParams }) => {
  const toggleOrder = () => {};
  const handleSortByClick = (e) => {
    switch (e.target.innerText) {
      case "Date":
        setSearchParams({ sort_by: "created_at" });
        break;
      case "Comments":
        setSearchParams({ sort_by: "comment_count" });
        break;
      case "Votes":
        setSearchParams({ sort_by: "votes" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="sort-by">
      <p>Sort by:</p>
      <div className="sort-queries">
        <button onClick={handleSortByClick}>Date</button>
        <button onClick={handleSortByClick}>Comments</button>
        <button onClick={handleSortByClick}>Votes</button>
      </div>
      <button className="order" onClick={toggleOrder}>
        Change order Acending/Descending
      </button>
    </div>
  );
};

export default SortBar;
