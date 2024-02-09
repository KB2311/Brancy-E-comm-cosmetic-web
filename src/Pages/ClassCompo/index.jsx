import React, { Component } from 'react';

export default class ClassCompo extends Component {
  // mounting
  /*
     -> constructor
     -> getDeriveStateFromProps
     -> render
     -> componentDidMount
    */
  // updating
  // unmounting
  // error
  constructor() {
    super();
    this.state = {
      count: 0,
      name: 'kunjbihari',
    };
    this.increment = () => {
      this.setState(({ count }) => ({ count: count + 1 }));
    };

    this.decrement = () => {
      this.setState(({ count }) => ({ count: count - 1 }));
    };

    this.changeName = () => {
      this.setState({ name: 'kunjbihari hirani' });
    };
  }

  render() {
    const { count, name } = this.state;
    console.log(count);

    return (
      <div className="flex flex-col py-40">
        <div className=" flex items-center justify-center gap-10">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-2xl font-bold text-white"
            type="button"
            onClick={this.increment}
          >
            +
          </button>
          <div className="text-2xl font-bold"> {count} </div>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-2xl font-bold text-white"
            type="button"
            onClick={this.decrement}
          >
            -
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-10 font-bold">{name}</div>
          <button
            type="button"
            className="mt-3 flex h-10 w-40 items-center justify-center rounded-xl bg-purple-600 font-bold text-white"
            onClick={this.changeName}
          >
            Change Name
          </button>
        </div>
      </div>
    );
  }
}
