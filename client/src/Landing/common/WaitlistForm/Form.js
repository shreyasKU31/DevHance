/**
 * @file Form.js
 * @description Handler for opening the waitlist popup.
 * @module WaitlistForm
 */
import waitlist from "@zootools/waitlist-js";

/**
 * Opens the waitlist popup for early access.
 * @param {Event} event - The click event.
 */
const clickPopup = (event) => {
  event.preventDefault();
  waitlist.openPopup("sCHKsn1SPegMvaMCtVm3");
};

export default clickPopup;
