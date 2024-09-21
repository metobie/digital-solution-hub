import React from 'react';
import CookieConsent from "react-cookie-consent";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Jag förstår"
      cookieName="renewIOCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      Denna webbplats använder cookies för att förbättra din upplevelse.{" "}
      <span style={{ fontSize: "10px" }}>
        Genom att fortsätta använda sidan godkänner du vår användning av cookies.
      </span>
    </CookieConsent>
  );
};

export default CookieConsentBanner;