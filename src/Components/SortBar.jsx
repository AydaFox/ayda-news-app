const SortBar = ({ searchParams, setSearchParams }) => {
  const order = searchParams.get("order") ? searchParams.get("order") : "desc";

  const toggleOrder = () => {
    setSearchParams((currSearchParams) => {
      const sortBy = currSearchParams.get("sort_by");
      if (sortBy) {
        return { sort_by: sortBy, order: order === "desc" ? "asc" : "desc" };
      } else {
        return { order: order === "desc" ? "asc" : "desc" };
      }
    });
  };

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
      <p>Sort:</p>
      <div className="sort-queries">
        <button onClick={handleSortByClick}>Date</button>
        <button onClick={handleSortByClick}>Comments</button>
        <button onClick={handleSortByClick}>Votes</button>
      </div>
      <div className="order">
        <label htmlFor="order-button">Order:</label>
        <button id="order-button" onClick={toggleOrder}>
          {order === "desc" ? "Descending" : "Ascending"}
        </button>
      </div>
    </div>
  );
};

export default SortBar;
