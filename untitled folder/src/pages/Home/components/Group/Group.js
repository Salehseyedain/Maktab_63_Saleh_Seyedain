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
    componentDidMount() {
        console.log(this.props)
    }


    render() {
        let num=0;
        return (
            <div className={style.contain}>
                    <Link to={PATHS.SHELVS} className={style.hed} >
                    <h1>{`كالا هاي گروه ${this.props.hOne}`}</h1><MdArrowDropDownCircle size={30} color={"blue"} style={{marginTop:"2rem"}}/>
                </Link>
                <div className={style.roww}>

                    {
                        this.props.data.map((item ,index)=>{

                        if(item.category.group==this.props.hOne && num<6){
                            num+=1
                            return <Card data={item}/>
                        }
                    })}
                </div>


                {/*<div className={style.roww}>*/}
                {/*    */}
                {/*    <Card/>*/}
                {/*    <Card/>*/}
                {/*</div>*/}
                {/*<div className={style.roww}>*/}
                {/*    <Card/>*/}
                {/*    <Card/>*/}
                {/*    <Card/>*/}
                {/*</div>*/}
            </div>
        )
    }
}
