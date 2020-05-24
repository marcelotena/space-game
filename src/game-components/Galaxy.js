import React, { useEffect } from 'react';
import System from "./System";
import store from "../store";
import { getPlanets } from "../actions/planets";

const Galaxy = () => {

  return (
      <div>
        <System />
      </div>
  );
};

export default Galaxy;
