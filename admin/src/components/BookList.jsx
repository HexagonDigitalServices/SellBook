  // Compute filtered and sorted list
  const displayedBooks = useMemo(() => {
    let filtered = books;
    if (filterCategory !== "All") {
      filtered = filtered.filter((book) => book.category === filterCategory);
    }

    if (sortConfig === "priceLowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortConfig === "topRated") {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [books, filterCategory, sortConfig]);


const tableHeaders = [
    { key: null, label: "Book" },
    { key: "author", label: "Author" },
    { key: null, label: "Category" },
    { key: "price", label: "Price" },
    { key: "rating", label: "Rating" },
    { key: null, label: "Actions" },
  ];

★
↑
