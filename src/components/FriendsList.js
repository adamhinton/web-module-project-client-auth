import React, {useState, useEffect} from "react";
import axios from "axios";

const FriendsList = () =>{
  const [friends, setFriends] = useState([]);

  useEffect(() =>{
    console.log(localStorage)
    const token = localStorage.getItem('token');
    console.log('FRIENDSLIST.JS TOKEN:', token)
    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token
      }
    })
      .then(resp =>{
        // console.log('bjioadfdsa')
        // console.log(resp)
        setFriends(resp.data)
      })
      .catch(err =>{
        console.log(err)
      })
  }, [])

  // console.log(friends)
    return (
      <div>
            <h2>Friends List</h2>
            <ul>
              <li>
              Name-Age-Email
              </li>
              <li>
              Name-Age-Email
              </li>
              <li>
              Name-Age-Email
              </li>
              <li>
              Name-Age-Email
              </li>
            </ul>
      </div>
    )
  }

  export default FriendsList;