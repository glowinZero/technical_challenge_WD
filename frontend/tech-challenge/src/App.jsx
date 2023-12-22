import { useState } from "react";
import PhoneList from "./Components/PhonesList";
import PhoneDetails from "./Components/PhonesDetails";

function App (){
  const [selectedPhoneId, setSelectedPhoneId] = useState(null);

  const handlePhoneSelect = (phoneId) => {
    setSelectedPhoneId(phoneId);
  };

  return (
    <div>
      <PhoneList onSelect={handlePhoneSelect} />
      {selectedPhoneId && <PhoneDetails phoneId={selectedPhoneId} />}
    </div>
  );
}

export default App;
