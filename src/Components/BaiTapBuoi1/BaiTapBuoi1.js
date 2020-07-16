import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSideBar from './BTSideBar'
import BTProduct from './BTProduct'
import BTFooter from './BTFooter'

export default class  extends Component {
    render() {
        return (
            <div>
                <BTHeader/>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-3">
                            <BTSideBar/>
                        </div>
                        <div className="col-9">
                            <BTProduct/>
                        </div>
                    </div>
                </div>
                <BTFooter/>
            </div>
        )
    }
}
