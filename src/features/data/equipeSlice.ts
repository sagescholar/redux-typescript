import { PayloadAction,createSlice } from "@reduxjs/toolkit"
import { RootState } from '../../app/store'
import { Weapon } from "./WEAPONS/type";

const initialState:number[] = []

export const equipeSlice = createSlice({
    name: "equipe",
    initialState,
    reducers: {
        "add": (state, action: PayloadAction<number>) => {
            state.push(action.payload)
        }
    }
})

export const equipeData = (state: RootState) => state.equipe;

export const { add } = equipeSlice.actions
export default equipeSlice.reducer
