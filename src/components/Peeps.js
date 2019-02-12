import React from 'react';

export var Peeps = function(props) {
  return <ViewPeeps onClick={props.handleShowPeeps}/>
}

export var ViewPeeps = function(props) {
  return <button onClick={props.handleShowPeeps}>View Peeps</button>
}
