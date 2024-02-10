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
  /*
     -> getDeriveStateFromProps
     -> shouldComponentUpdate
     -> render
     -> getSnapshotBeforeUpdate
     -> ComponentDidUpdate
  */
  // unmounting
  // error

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: 'kb',
      data: null,
    };
  }

  async componentDidMount() {
    window.addEventListener('dblclick', () => {
      console.log('dblclick');
    });
    try {
      const res = await fetch('https://fakestoreapi.com/products/1');
      const json = await res.json();
      this.setState({ data: json });
      // console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      greet: `Heellooo from ${props.title}`,
    };
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  changeName = () => {
    this.setState({ name: 'Kunjbihari' });
  };

  render() {
    const { count, name, greet, data } = this.state;
    // const { title } = this.props;
    return (
      <div className="">
        {data && <p className="text-2xl font-bold">{data.title}</p>}
        <h1 className="text-3xl font-bold">{greet}</h1>
        <button
          className="w-fit border-2 border-black text-3xl font-bold"
          type="button"
          onClick={() => {
            this.setState((state, props) => ({
              greet: `hola from ${props.title}`,
            }));
          }}
        >
          Change Hello
        </button>
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
