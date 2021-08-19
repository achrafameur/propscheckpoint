import React from "react"
import './App.css';
import ProfileComp  from './profile/profilecomponent';
import image from "./image.jpg";

const alertMyInput = name => alert(name);
const App=() => {
  return (
    <div className="App">
      <ProfileComp title="My Picture" picture={image} fullname="  Achraf Ameur " 
      bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis impedit voluptatem? Maxime alias odio placeat tempora veritatis. Doloremque doloribus facere, qui corrupti quas ipsum illum cumque nulla deserunt officiis.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis impedit voluptatem? Maxime alias odio placeat tempora veritatis. Doloremque doloribus facere, qui corrupti quas ipsum illum cumque nulla deserunt officiis." 
      profession=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis impedit voluptatem? Maxime alias odio placeat tempora veritatis. Doloremque doloribus facere, qui corrupti quas ipsum illum cumque nulla deserunt officiis.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis impedit voluptatem? Maxime alias odio placeat tempora veritatis. Doloremque doloribus facere, qui corrupti quas ipsum illum cumque nulla deserunt officiis." 
      alertMyInput={alertMyInput}/> 
    </div>
  );
}


export default App;
