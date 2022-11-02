import {ToggledStyle} from './Toggled.Styled'
import React from "react";

export default function Toggle({ toggledValue, setToggledFun ,togDrawer}) {
    return (
        <ToggledStyle togDrawer={togDrawer}>
        <div onClick={setToggledFun} className={`day${toggledValue ? " night" : ""}`}>
            <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape lg" />
            </div>
        </div>
        </ToggledStyle>
    );
}