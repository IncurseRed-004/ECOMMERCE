import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: JSON.parse(localStorage.getItem("users")) || [],
        user: JSON.parse(localStorage.getItem("user")) || null,
        isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false
    },
    reducers: {
        userRegister: (state, action) => { //action ={payload:{}}
            state.users.push(action.payload);
        },
        userLogin:()=> {

}
    }
});

// userRegister({fullname:"tom", age:20})

export const { userRegister, userLogin } = userSlice.actions;

export default userSlice.reducer;