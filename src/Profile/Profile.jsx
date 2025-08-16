import "./Profile.css";
import Cards from "../Cards/Cards";

function Profile({
  handleItemClick,
  items,
  handleAddClick,
  handleLike
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
      </section>
      <section className="profile__clothesSection">
        <Cards
          handleItemClick={handleItemClick}
          items={ items }
          handleAddClick={handleAddClick}
          handleLike={handleLike}
        />
      </section>
    </div>
  );
}

export default Profile;
