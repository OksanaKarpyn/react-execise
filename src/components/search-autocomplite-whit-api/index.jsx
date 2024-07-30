import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import "./style.css";
const SearchAutocomplite = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  async function fetchListOfusers() {
    try {
      setLoading(true);
      let res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }
  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
    console.log(event.target.innerText);
  }
  useEffect(() => {
    fetchListOfusers();
  }, []);
  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplite-container">
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}
      {showDropDown && (
        <Suggestions
          handleClick={handleClick}
          data={filteredUsers}
          param={searchParam}
        />
      )}
    </div>
  );
};

export default SearchAutocomplite;
