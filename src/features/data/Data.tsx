
import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    increment, selectData
} from './dataSlice'
import { Student } from "./WEAPONS/type";


export const Data = () => {
    const value = useAppSelector(selectData)
    const dispatch = useAppDispatch()
    
    return(
        <section>
            <button
            onClick={()=>dispatch(increment())}
            >
            {value}
            </button>
            {Student["Akira"].School}
        </section>
    )
}