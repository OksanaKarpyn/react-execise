import React, { useEffect, useState } from "react";
import User from "./user";
const GitHub = () => {
  const [userName, setUserName] = useState("OksanaKarpyn");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchGithubUserData() {
    setLoading(true);
    let res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }
  return (
    <div>
      GitHub
      <input
        type="text"
        name=""
        id=""
        placeholder="search by username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      <div>{userData !== null ? <User user={userData} /> : null}</div>
    </div>
  );
};

export default GitHub;
