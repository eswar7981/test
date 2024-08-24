import React, { useState } from "react";
import { memo } from "react";
const Button = (props) => {




  return (
    <div>
    {props.value}
    <p>dsds</p>
    <button>dsdsd</button>
    </div>
  );
};

export default memo(Button);
