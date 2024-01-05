const Logo = () => (
    <>
      <img
        src="https://scontent.fpnq7-5.fna.fbcdn.net/v/t39.30808-6/304797929_463513755788181_7687992048680015416_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2QQlr7GInhMAX-G9bCe&_nc_ht=scontent.fpnq7-5.fna&oh=00_AfBHFhj35EWh2g08cN8I44P33SaR8Ot3TtY3niXziMdGZA&oe=659B2F5B"
        className="Logo"
        alt=""
      />
    </>
  );

export const HeaderComponent = () => {
  return (
    <>
      <div className="Header">
        <Logo />
        <div className="nav-items">
          <ul>
            <li>
              <a href="#Home"></a>Home
            </li>
            <li>
              <a href="#About"></a>About
            </li>
            <li>
              <a href="#Contact"></a>Contact Us
            </li>
            <li>
              <a href="#Cart"></a>Cart
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
