import React, { useState, useEffect } from "react";
import UserCards from "./components/UserCards";
import Localization from "./components/Location"
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      } 
      
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(
      user => (`${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(value)
      )
    );

    setUsers(filteredUsers);
  };

  const [visible, setVisible] = useState(10)
  const showMoreCards = () => {
    setVisible(prevValue => prevValue + 10);
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Comunidade</h1>
        <input className='search__box' placeholder='Seach...' onInput={filterCards}/>
      </div>
      <div className='cards__container'>
        {users.slice(0, visible).map((user, index) => (
          <UserCards userData={user} key={index} />
        ))}
      </div>
      <div className='button__viewmore'>
        <button onClick={showMoreCards}>
          <a href='#'>Ver mais</a>
        </button>
      </div>
    </div>
  );
}

export default App;
