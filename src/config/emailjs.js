/**
 * EmailJS settings — this is the ONLY file you need to edit to make the
 * appointment form deliver enquiries straight to the clinic's inbox.
 *
 * How to get these 3 values (all free, takes ~10 minutes):
 *
 *  1. Sign up at https://www.emailjs.com  (use addlifephysiocare@gmail.com)
 *  2. Email Services  -> Add New Service -> pick Gmail -> Connect Account
 *     -> copy the "Service ID"          (looks like: service_ab12cde)
 *  3. Email Templates -> Create New Template
 *     -> in the template body use these exact variables:
 *          {{name}}  {{email}}  {{service}}  {{datetime}}  {{message}}
 *     -> set "To Email" to addlifephysiocare@gmail.com
 *     -> set "Reply To" to {{email}}  (so replying goes to the patient)
 *     -> Save, then copy the "Template ID"  (looks like: template_xy34fgh)
 *  4. Account -> General -> copy the "Public Key"  (looks like: A1bC2dE3fG4hI5jK)
 *
 * Paste each value between the quotes below, then rebuild (npm run build).
 * Until they are filled in, the form falls back to opening Gmail as before.
 *
 * Note: the Public Key is safe to keep here — EmailJS is designed for
 * browser use. Lock it down in EmailJS -> Account -> Security by allowing
 * only the clinic's domain.
 */
export const EMAILJS_SERVICE_ID = "";
export const EMAILJS_TEMPLATE_ID = "";
export const EMAILJS_PUBLIC_KEY = "";

/** True only once all three values above are filled in. */
export const isEmailJsConfigured = () =>
  Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
