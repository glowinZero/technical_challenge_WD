import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function PhoneDetails({ phoneId }) {
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/api/phones/${phoneId}`);
        setPhone(response.data);
      } catch (error) {
        console.error("Error fetching phone details:", error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch details if phoneId is not "0" (for initial render)
    if (phoneId !== "0") {
      fetchPhoneDetails();
    }
  }, [phoneId]);

  return (
    <div>
      <h2>Phone Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : phoneId !== "0" ? (
        <div>
          <p>Name: {phone.name}</p>
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Description: {phone.description}</p>
          <p>Color: {phone.color}</p>
          <p>Price: {phone.price}€</p>
          <p>Processor: {phone.processor}</p>
          <p>Ram: {phone.ram}</p>
        </div>
      ) : (
        <p>No phone details available.</p>
      )}
    </div>
  );
}

PhoneDetails.propTypes = {
  phoneId: PropTypes.string.isRequired,
};

export default PhoneDetails;


