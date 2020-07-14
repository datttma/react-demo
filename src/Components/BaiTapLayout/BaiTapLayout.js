import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import Productlist from './Productlist'
import BTFooter from './BTFooter'
export default class BaiTapLayout extends Component {
    // nội dung giao diện chứa trong hàm return của phương thức render --- rcc 
    render() {
        return (
            <div>
                <BTHeader/>
                <BTCarousel/>
                <Productlist/>
               <BTFooter/>
            </div>
        )
    }
}
