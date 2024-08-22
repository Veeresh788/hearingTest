import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfilesContext } from "../UserContextProvider";

function TestCompleteForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let location = useLocation();
  let navigate = useNavigate();
  let { leftSideHearingResults, rightSideHearingResults } = location.state;
  let { setProfiles, profiles } = useContext(ProfilesContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      name,
      age,
      results: {
        left: leftSideHearingResults,
        right: rightSideHearingResults,
      },
    };
    setProfiles([...profiles, obj]);

    // Reset form
    setName("");
    setAge("");
    navigate("/profiles");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Age:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TestCompleteForm;
