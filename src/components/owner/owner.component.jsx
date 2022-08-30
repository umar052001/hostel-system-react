import React, { Fragment } from "react";
import Table from "../table/table.component";
const Owner = ({ userEmail }) => {
  return (
    <Fragment>
      <Table userEmail={userEmail} />
    </Fragment>
  );
};

export default Owner;
