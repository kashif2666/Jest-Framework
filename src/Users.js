import React from "react";

export default class Users extends React.Component {
  getUserList(a) {
    return a + "extraText";
  }

  render() {
    return (
      <div>
        <h2> Users Class Component</h2>
      </div>
    );
  }
}
