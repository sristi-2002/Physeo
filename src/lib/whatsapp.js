/* The clinic's number in international form, with no "+" or spaces —
   that's the format every WhatsApp link endpoint expects. */
export const CLINIC_WHATSAPP = "917797044666";

const isMobile = () =>
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
    navigator.userAgent || ""
  );

/**
 * Builds a WhatsApp link that opens the chat with `text` pre-filled.
 *
 * WhatsApp cannot send on the visitor's behalf — they always tap Send —
 * but we can at least skip a screen. On mobile, wa.me hands straight off
 * to the app. On desktop, wa.me bounces through api.whatsapp.com's
 * "Open app / Continue to WhatsApp Web" chooser, so we link to WhatsApp
 * Web directly instead and land in the chat in one step.
 */
export function whatsappUrl(text) {
  const message = encodeURIComponent(text);

  return isMobile()
    ? `https://wa.me/${CLINIC_WHATSAPP}?text=${message}`
    : `https://web.whatsapp.com/send?phone=${CLINIC_WHATSAPP}&text=${message}`;
}
