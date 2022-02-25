import React, {Component} from 'react';
import * as api from "../../api/user.api";
import {PRODUCTS} from "../../configs/url.config";
import {Main} from "./components/Main/Main.js"


class Commoditi extends Component {
    state={
        isLoading:true
        // data:[]

    }
    async componentDidMount() {
        this.setState({isLoading:true})

        let params = window.location.search.slice(6,window.location.search.length+1);
        console.log(params)
        try {

            const response = await api.getData(PRODUCTS+"/"+params);
            this.setState({data:response})
            this.setState({isLoading:false})
            console.log("dddddd",response)
        } catch (e) {

        }

    }


    render() {
        if(this.state.isLoading){
            return (
                <div>
                    looddinnnnggggggg
                </div>
            );

        }else {
            return (
                <div>
                   <Main data={this.state.data}/>
                </div>
            );

        }

    }
}

export {Commoditi}