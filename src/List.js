import React from 'react'

const List = ({usersList}) => {
  return (
    <>
        <ul>
          {usersList.map((user) => (
            <li key={user.id}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </>
  );
};

export default List