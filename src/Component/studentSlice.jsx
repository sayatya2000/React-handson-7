import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: 'Student', 
    initialState: {
        studentArray: [],
        studentInfo: {
            name: '',
            age: '',
            course: '',
            batch: ''
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.studentArray.push(action.payload.state)
            return state
        },
        editUser: (state, action) => {
            state.studentArray[action.payload.index] = action.payload.state;
            console.log(action.payload)
            return state
        }
    }
});

export const {addUser, editUser} = studentSlice.actions;

export default studentSlice.reducer