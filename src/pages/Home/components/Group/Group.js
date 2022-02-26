import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Card from '../../../../components/Cards/Card'
import style from '../../../../asset/styles/Group.module.css'
import { MdArrowDropDownCircle} from "react-icons/all"
import {PATHS} from "../../../../configs/routes.config";
export default class Group extends Component {
    state={
        num:0,
        data:[]
    }
    

    render() {
        let num=0;
        return (
            <div className={style.contain}>
                <Link to={`${PATHS.SHELVS}/?grop=${this.props.hOne[1]}`} className={style.hed} >
                    <h1>{`كالا های گروه ${this.props.hOne[0]}`}</h1>
                    <MdArrowDropDownCircle size={30} color={"green"} style={{marginTop:"2rem"}}/>
                </Link>
                <div className={style.roww}>

                    {
                        this.props.data.map((item ,index)=>{
                        if(item.category.group==this.props.hOne[0] && num<6){
                            num+=1
                            console.log(item);
                            return <Card data={item}/>
                        }
                    
                    })}
                </div>
            </div>
        )
    }
}
