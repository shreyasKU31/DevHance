import waitlist from "@zootools/waitlist-js";

const clickPopup = (event) => {
  event.preventDefault();

  // Pass your waitlist ID
  waitlist.openPopup("sCHKsn1SPegMvaMCtVm3");
};

export default clickPopup;
