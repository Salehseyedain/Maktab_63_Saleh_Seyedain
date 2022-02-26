import  './Home.css'
import React, {Component} from 'react';
import * as api from "../../api/user.api";
import {PRODUCTS} from "../../configs/url.config";
import {Carousel} from '../../components/Carousel/Carousel'
import Group from './components/Group/Group';


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


            </div>
        );
    }
}

export {Home};