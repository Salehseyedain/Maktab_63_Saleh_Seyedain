import React, { Component } from 'react'
import style from '../../../../asset/styles/Resulte.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
function Failed() {
  
    return (
      <div className={style.contain}>
          <div >
            <FontAwesomeIcon icon={faTimesCircle} size="10x" color='red'/>
          </div>
          <div>
            <p>پرداخت موفقیت امیز نبود، سفارش شما در انتظار پرداخت است</p>
          </div>
      </div>
    )
  
}

export {Failed}