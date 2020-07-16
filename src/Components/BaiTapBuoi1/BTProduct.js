import React, { Component } from 'react'
import BTItem from './BTItem'

export default class BTProduct extends Component {
    render() {
        return (
          <div className="row mt-5">
            <div className="col-4">
              <BTItem />
            </div>
            <div className="col-4">
              <BTItem />
            </div>
            <div className="col-4">
              <BTItem />
            </div>
            <div className="col-4">
              <BTItem />
            </div>
            <div className="col-4">
              <BTItem />
            </div>
            <div className="col-4">
              <BTItem />
            </div>
           
          </div>
        );
    }
}
