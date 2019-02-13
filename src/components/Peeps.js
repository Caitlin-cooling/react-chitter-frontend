import React from 'react';

export var Peeps = function(props) {
    if(props.postPeepState) {
      return <PostPeepForm/>
    } else if (props.showPeepsState) {
      return <ShowPeeps
          isLoaded={props.isLoaded}
          peeps={props.peeps}
        />
    } else {
       return [
          <ViewPeeps handleShowPeeps={props.handleShowPeeps}/>,
          <PostPeep triggerPostPeepState={props.triggerPostPeepState}/>
      ];
    }
}

export var ViewPeeps = function(props) {
  return <button onClick={props.handleShowPeeps}>View Peeps</button>
}

export var ShowPeeps = function(props) {
  if (!props.isLoaded) {
    return <div>Loading...</div>
  } else {
    return <ul>
     {props.peeps.map(peep => (
       <li key={peep.id}>{peep.body}</li>
     ))}
    </ul>
  }
}

export var PostPeep = function(props) {
  return <button onClick={props.triggerPostPeepState}>Post Peep</button>
}

export var PostPeepForm = function(props) {
  return [
    <textarea placeholer='What would you like to say?'></textarea>,
    <button>Peep!</button>
  ];
}
