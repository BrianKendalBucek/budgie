import React, {useState, useEffect} from "react";

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/users/").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setUsers(jsonRes.usersList))
  })

  return (<div>
    {users.map(user => <li>{user}</li>)}
  </div>)
}

export default Users;