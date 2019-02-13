import React from 'react';

export var Peeps = function(props) {
  console.log(props)
    if(props.postPeepState) {
      return <div>
        <PostPeepForm/>
      </div>
    } else if (props.showPeepsState) {
      return <div>
        <ShowPeeps isLoaded={props.isLoaded} peeps={props.peeps}/>
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

export var ShowPeeps = function(props) {
  if (!props.isLoaded) {
    return <div>Loading...</div>
  } else {
    return <ul><li>{props.peeps}</li></ul>
  }
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
