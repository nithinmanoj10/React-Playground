import React from "react";

function CheckList() {
  return (
    <form>
      <input type="checkbox" id="todo1" />
      <label for="todo1">Do the Laundry</label>
      <br />
      <input type="checkbox" id="todo1" />
      <label for="todo1">Finish Homework</label>
      <br />
      <input type="checkbox" id="todo1" />
      <label for="todo1">Workout</label>
    </form>
  );
}

export default CheckList;
