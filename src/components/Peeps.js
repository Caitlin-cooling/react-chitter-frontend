import React from 'react';

export var Peeps = function(props) {
    if(props.postPeepState === true) {
      return <div>
        <PostPeepForm/>
      </div>
    } else {
       return <div>
        <ViewPeeps handleShowPeeps={props.handleShowPeeps}/>
        <PostPeep triggerPostPeepState={props.triggerPostPeepState}/>
      </div>
    }
}

export var ViewPeeps = function(props) {
  return <button onClick={props.handleShowPeeps}>View Peeps</button>
}

export var PostPeep = function(props) {
  return <button onClick={props.triggerPostPeepState}>Post Peep</button>
}

export var PostPeepForm = function(props) {
  return <div>
    <textarea placeholer='What would you like to say?'></textarea>
    <button>Peep!</button>
  </div>
}
