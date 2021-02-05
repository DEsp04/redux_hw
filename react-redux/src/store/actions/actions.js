
export const loading = () => { 
  return {
    type: "LOADING"
  }
}



//ageUp action creator
export const ageUpAsync = (val) => { 
  return { type: 'AGE_UP', value: val };
}

//create an asynchronous event or when one does something asynchronous this the path one follow
//When ageUp button is clicked in the App component, the action is dispatch or get sent here to the 2nd dispatch. The 2nd dispatch does a setTimeout() and once time is up, and third dispatch is initiated where the action is then sent to the reducer.
export const ageUp = val => { 
  return dispatch => { 
    dispatch(loading());
    setTimeout(() => { 
      // val++;
      dispatch(ageUpAsync(val))
    }, 5000)
  }
}


//ageDown action creator
export const ageDown = (val) => { 
  return { type: 'AGE_DOWN', value: val };
}

//delItem action creator
export const delItem = (id) => {
  return { type: 'DEL_ITEM', key: id}
}