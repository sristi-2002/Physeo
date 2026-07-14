import { createContext, useContext } from "react";

/* Single source of truth for the clinic's number. Display form is what the
   user sees; the tel form (no spaces) is what the dialer needs. */
export const PHONE_DISPLAY = "+91 7797044666";
export const PHONE_TEL = "+917797044666";

export const PhonePopupContext = createContext(() => {});

/** Hook any phone link uses to pop the contact card open. */
export const usePhonePopup = () => useContext(PhonePopupContext);
