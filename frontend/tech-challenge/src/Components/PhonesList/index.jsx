import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function PhoneList({ onSelect }) {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedPhones = localStorage.getItem("phonesData");

        if (cachedPhones) {
          setPhones(JSON.parse(cachedPhones));
          setLoading(false);
        } else {
          const response = await axios.get("http://localhost:5005/api/phones");
          const fetchedPhones = response.data;

          localStorage.setItem("phonesData", JSON.stringify(fetchedPhones));

          setPhones(fetchedPhones);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching phones:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Phone List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {phones.map((phone) => (
            <li key={phone.id} onClick={() => onSelect(Number(phone.id))}>
              {phone.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

PhoneList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default PhoneList;
