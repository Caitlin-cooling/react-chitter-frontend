import React from 'react';

export var Peeps = function(props) {
    if(props.postPeepState) {
      return <div>
          <PostPeepForm
            isPeep={props.isPeep}
            handlePostPeep={props.handlePostPeep}
            handlePeepChange={props.handlePeepChange}
          />
          <ViewPeeps handleShowPeeps={props.handleShowPeeps}/>
        </div>
    } else if (props.showPeepsState) {
      return <div><ShowPeeps
          isLoaded={props.isLoaded}
          peeps={props.peeps}
        />
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
  if (props.isPeep) {
    return <div>Peep Posted!</div>
  } else {
    return <form>
      <textarea onChange={props.handlePeepChange} placeholder='What would you like to say?'></textarea>
      <button onClick={props.handlePostPeep}>Peep!</button>
    </form>
  }
}
