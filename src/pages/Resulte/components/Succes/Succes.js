import React, { Component } from 'react'
import style from '../../../../asset/styles/Resulte.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

class Succes extends Component {
  render() {
    return (
      <div className={style.contain}>
          <div>
            <FontAwesomeIcon icon={faCircleCheck} color="green" size='10x'/>
          </div>
          <div className={style.direction}>
            <p>باتشکر از پرداخت شما،سفارش ثبت
              <br/> شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد</p>
          </div>
      </div>
    )
  }
}

export {Succes}