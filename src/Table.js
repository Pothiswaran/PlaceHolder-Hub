import React from 'react';

const Table = ({ usersList }) => {
  if (usersList.length === 0) return null;

  return (
    <div className="table-container">
      <table>
        <caption><h1>Table Format</h1></caption>
        <thead>
          <tr>
            {Object.keys(usersList[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr key={user.id}>
              {Object.values(user).map((value, index) => (
                <td key={index}>{JSON.stringify(value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;









