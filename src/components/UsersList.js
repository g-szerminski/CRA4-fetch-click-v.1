import React from "react";
const UsersList = props => {
  console.log(props.users);
  const users = props.users.map(item => (
    <div key={item.login.uuid}>
      <h4>{`${item.name.title} ${item.name.last}`}</h4>
      <p>{item.email}</p>
    </div>
  ));
  return <ul>{users}</ul>;
};

export default UsersList;
