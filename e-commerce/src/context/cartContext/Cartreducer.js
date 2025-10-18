export const cartReducer = (state,action) => {
if(action.type === 'INCREMENT'){
    console.log("hello increment");
}else{
    return state;
}
}
