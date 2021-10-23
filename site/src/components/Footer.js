import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../stores/site";
const Footer = () => {
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["tr", "en"];
  const dispatch = useDispatch();
  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };
  const handleDarkMode = () =>{
      dispatch(setDarkMode())
  }
  return (
    <div>
      Footer
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => handleLanguage(lang)}
            className={lang === language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
       <button onClick={handleDarkMode}>{dark ? 'Light Moda geç': 'Dark moda geç'}</button>
      </div>
    </div>
  );
};

export default Footer;
