import React, {Component} from 'react';
import Group from '../Home/components/Group/Group';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import {PRODUCTS} from '../../configs/url.config';
import * as api from '../../api/user.api';
import style from '../../asset/styles/Shelvs.module.css'
class Shelvs extends Component {
    state={
        data:[],
        grop:[]
    }

    async componentDidMount() {

        let params = window.location.search.slice(6,window.location.search.length+1);
        console.log(params)
        try {

            const response2 = await api.getData(PRODUCTS);
            const response= await api.getData(`/category/${params}`);
            this.setState({grop:response})
            this.setState({data:response2})

            console.log("dddddd",response)
        } catch (e) {

        }
    }

    render() {
        return (
            <div className={style.container}>

                <Main data={[this.state.data,this.state.grop]}/>
                <Sidebar/>
                
           </div>
        );
    }
}

export {Shelvs};
