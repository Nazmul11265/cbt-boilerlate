const initialState ={
    token : null,
    user :{
        fullname:'',
        email:'',
        role:''
    },
    authenticating:false,
    authenticate : false
}
export default (state=initialState,action:any)=>{

    console.log(action);
    switch(action.type){
        case "a":
            state={
                ...state,
                authenticating:true

            }
            break;
        case "b":
            state={
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authenticating:false,
                authenticate:true
            }
            break;
    }
    return state;

}