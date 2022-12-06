import React from "react";

export default function ComponentCard(props) {
  return (
    <div className="listitem">
      <label>
        {props.componentname}
      </label>
      <div>
        <input type="checkbox" id="componentcheck" name="check"/>
      </div>

    </div>

 
  );
}