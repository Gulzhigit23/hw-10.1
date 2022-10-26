import React from "react";
import Card from "../UI/Card";
import classes from "./DataOfUser.module.css";

function DataOfUsers({ url, title, id }) {
  return (
    <Card className={classes.container}>
      <div>
        <p>{id}</p>
       <span>{title}</span> 
        <img src={url} alt="" />
      </div>
    </Card>
  );
}

export default DataOfUsers;
