import Body from "../Body/Body";

function Main({handleAboutClick, handleShopClick, handleAlexClick, carousel, handleItemClick, onItemLike, handleLike}) {
  return (
    <section className="main">
      <Body
        handleAboutClick={handleAboutClick}
        handleShopClick={handleShopClick}
        handleAlexClick={handleAlexClick}
        handleItemClick={handleItemClick}
        carousel={ carousel }
      />
    </section>
  );
}

export default Main;
