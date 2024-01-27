import PropTypes from "prop-types"; // Import PropTypes at the top

import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.array.isRequired, // cities should be an array
};

export default CountryItem;
