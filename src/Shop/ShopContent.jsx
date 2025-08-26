function ShopContent({ handleItemClick, handleLike, handleItemLike }) {
  const { loading, updateQuantity } = useCart();

  // Track which category is selected
  const [activeTab, setActiveTab] = useState("all");

  if (loading) return <p>Loading cart...</p>;

  // Filter based on activeTab
  const filteredItems =
    activeTab === "all"
      ? itemOptions
      : itemOptions.filter((item) => item.type === activeTab);

  return (
    <section className="shop">
      {/* 🔹 Category Tabs */}
      <div className="shop__main">
        <button
          className={`shop__type-button ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`shop__type-button ${activeTab === "cookie" ? "active" : ""}`}
          onClick={() => setActiveTab("cookie")}
        >
          Cookies
        </button>
        <button
          className={`shop__type-button ${activeTab === "cupcake" ? "active" : ""}`}
          onClick={() => setActiveTab("cupcake")}
        >
          Cupcakes
        </button>
      </div>

      {/* 🔹 Product Grid */}
      <div className="shop__container">
        <section className="shop__content">
          <ul className="cards__list" key="shop_cards-list">
            {filteredItems.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                handleItemClick={handleItemClick}
                handleLike={handleLike}
                handleItemLike={handleItemLike}
              />
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default ShopContent;
