import React from "react";
import Container from "./Container";
import { withUnlaunchProvider, Consumer } from 'unlaunch-react-client-sdk'

const Item = ({ searchTerm }) => {
  return (
    <div>
      <Consumer>
        {
          context => (
            <>
              <h2>{searchTerm} Pictures</h2>
              <Container searchTerm={searchTerm} variation={context.flags['react-test-flag']}/>
            </>
          )
        }
      </Consumer>
    </div>
  );
};

export default Item;
