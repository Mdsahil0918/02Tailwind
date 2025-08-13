import React,{useContext} from 'react';
import UserContext from '../context/UserContext';
function Profile(){
  const {user}= useContext(UserContext);
  if(!user){
    return <h1>Please login..</h1>
  }
  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.name}</h2>
      <h2>{user.phone}</h2>
    </div>
  )
}
export default Profile;