import React, { Component } from 'react'
import Card from '../../../../components/Cards/Card'
import style from '../../../../asset/styles/Group.module.css'
export default class Group extends Component {
  render() {
    return (
      <div className={style.contain}>
          <h1>{this.props.hOne}</h1>
          <div className={style.roww}>
              <Card/>
              <Card/>
              <Card/>
          </div>
          <div className={style.roww}>
              <Card/>
              <Card/>
              <Card/>
          </div>
        </div>
    )
  }
}
