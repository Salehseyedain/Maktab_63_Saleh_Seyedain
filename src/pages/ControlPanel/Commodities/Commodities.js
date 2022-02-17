import React, {Component} from 'react';
import * as api from "../../../api/user.api";
import {PATHS} from "../../../configs/routes.config";
import style from '../../../asset/styles/Commodities.page.module.css';
import { Button } from '@mui/material';
import CollapsibleTable from "./components/Table/Table";
import {PRODUCTS} from "../../../configs/url.config";
import TransitionsModal from "./components/AddModal/AddModal";
import AddModal from "./components/AddModal/AddModal";





class Commodities extends Component {
    state={
        data:[]
    }
    async componentDidMount() {
        try {
            const response = await api.getData(PRODUCTS);
            this.setState({data:response})
        } catch (e) {

        }
    }


    render() {
        return (
            <div className={style.contaner}>
                <div className={style.Topcontaner}>
                    <h3>مديريت كالاها</h3>
                    <AddModal/>
                </div>
                <div className={style.botmcontaner}>
                    <CollapsibleTable prop={this.state}/>


                </div>
            </div>
        );
    }
}

export {Commodities};