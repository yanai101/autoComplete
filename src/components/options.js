import React from "react";
import * as style from './options.module.scss';



const Option = ({value , onClick, display}) => <div className={style.option} onClick={()=>onClick(value)}>{display || value}</div>

export default Option;
