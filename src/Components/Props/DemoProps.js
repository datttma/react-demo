import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps';
 const dog = {
   image:"https://i.pinimg.com/564x/98/ca/f4/98caf4fcbe9f62d10d524c9bd942ca48.jpg",
   name: "Name",
   age : 3
 };
  const dog2 = {
    hinh:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Cyrillic_letter_A_-_uppercase_and_lowercase.svg",
    ten: "Name",
    tuoi: 3,
  };
export default class DemoProps extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Demo Props</h1>
                {/*truyền props  image cho component ClassProps  */}
                <ClassProps dog={dog} image="https://i.pinimg.com/564x/98/ca/f4/98caf4fcbe9f62d10d524c9bd942ca48.jpg" name="name"/>
                <FunctionProps dog2={dog2}/>
            </div>
        )
    }
}
