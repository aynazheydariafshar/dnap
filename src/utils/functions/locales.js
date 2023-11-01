"use client";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

// load locales files
const loadLocaleData = (locale) => {
  switch (locale) {
    case "ar":
      return import("../locales/ar.json");
    default:
      return import("../locales/en.json");
  }
};

// ==============================|| LOCALIZATION ||============================== //

const Locales = ({ children }) => {
  const locale = useSelector((state) => state.rtl.rtlLayout) ? "ar" : "en";
  const [messages, setMessages] = useState();
  useEffect(() => {
    loadLocaleData(locale).then((d) => {
      setMessages(d.default);
    });
  }, [locale]);

  return (
    <>
      {messages && (
        <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

Locales.propTypes = {
  children: PropTypes.node,
};

export default Locales;
