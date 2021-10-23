import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const { dark, language } = useSelector((state) => state.site);
  return (
    <div>
      Header
      <div>
        Dark mod = {dark ? 'evet':'hayır'}
        <br />
        Language ={language}
      </div>
    </div>
  );
};

export default Header;
