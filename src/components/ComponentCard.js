import React from "react";

export default function ComponentCard(props) {
  return (
    <div>
      <div>
        <p
          style={{
            color: "#5A6EAB",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          {props.componentname}
        </p>
      </div>
      <div>
      <input type="checkbox" id="componentcheck" name="check" value="false"/>
      </div>
    </div>
  );
}