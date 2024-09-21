import React from 'react';
import CookieConsent from "react-cookie-consent";
import { Button } from "@/components/ui/button";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Jag förstår"
      cookieName="renewIOCookieConsent"
      style={{
        background: "linear-gradient(to right, #3E7A8B, #8A3A8B)",
        color: "#ffffff",
      }}
      buttonStyle={{
        background: "#ffffff",
        color: "#3E7A8B",
        fontSize: "14px",
        borderRadius: "4px",
        padding: "10px 20px",
      }}
      expires={150}
      ButtonComponent={Button}
    >
      Denna webbplats använder cookies för att förbättra din upplevelse.{" "}
      <span style={{ fontSize: "12px", display: "block", marginTop: "5px" }}>
        Genom att fortsätta använda sidan godkänner du vår användning av cookies.
      </span>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
