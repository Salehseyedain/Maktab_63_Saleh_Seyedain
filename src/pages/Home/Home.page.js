import  './Home.css'
import React, {Component} from 'react';
import * as api from "../../api/user.api";
import {PRODUCTS} from "../../configs/url.config";
import {Carousel} from '../../components/Carousel/Carousel'
import Group from './components/Group/Group';
import style from '../../asset/styles/Home.module.css'

class Home extends Component {
    state={
        data:[],
        commoditis:[]
    }
    async componentDidMount() {
        try {
            const response = await api.getData("/category");
            const response2 = await api.getData(PRODUCTS);
            this.setState({commoditis:response2})
            this.setState({data:response})

            console.log("dddddd",response2)
        } catch (e) {

        }
    }
    render() {
        return (
            <div>
                <Carousel/>
                {/*<HomeTable prop={this.state}/>*/}
                {  this.state.data .map(item=>{
                    return <Group hOne={[item.name,item.id]} data={this.state.commoditis}/>
                    
                })}

                {/* <div className={style.footerContainer}>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <p>Trobche - Copyright © 2022 - All Rights Reserved - Made by Saleh Seyedain</p>
                        <span>Logos</span>
                    </div>
                </div> */}
            </div>
        );
    }
}

export {Home};