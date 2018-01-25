import React from 'react';
import {Game} from "./game";

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => {
    return (
     <Game/>
   )
};

export default Home;