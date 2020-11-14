import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const Item = ({ children, title }) => (
  <div className="flex bg-white rounded-lg mx-auto place-items-center p-2 shadow-lg mb-3 w-full">
    <div className="border-solid border-2 border-blue-300 rounded-full mr-6 ml-2 bg-gray-100">
      <IconButton>{children}</IconButton>
    </div>
    <Typography
      textAlign="center"
      className="text-xs"
      style={{ color: "#63B3ED" }}
    >
      {title}
    </Typography>
  </div>
);

export default Item;
