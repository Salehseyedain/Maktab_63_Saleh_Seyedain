import React, {Component} from 'react'
import style from '../../../../asset/styles/Shelvs.Main.module.css'
import Card from '../../../../components/Cards/Card'
class Main extends Component {
    render() {
        return (
            <div className={style.contain}>

            <div className={style.hed}>
                <h1>{`كالاهاي گروه ${this.props.data[1].name}`}</h1>
            </div>
            <div className={style.roww}>
                {this.props.data[0].map(item=>{
                    if(item.category.group==this.props.data[1].name){
                        return <Card data={item}/>
                    }
                })}
            </div>
    </div>

        );
    }
}

export default Main;