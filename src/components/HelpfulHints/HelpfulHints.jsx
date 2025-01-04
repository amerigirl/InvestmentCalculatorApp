import "./HelpfulHints.styles.css";
import dreamVacay from "../../assets/dreamVacay.jpeg";

export default function HelpfulHints() {
  return (
    <>
      <p id="dollar">See what a difference a dollar can make!</p>
      <p id="vacay">
        Your next vacation is only<br></br> a few $dollars$ away!
      </p>

      <div id="helpful-hints">
        <img id="pic" src={dreamVacay} alt="Dream vacation" />
      </div>
    </>
  );
}
