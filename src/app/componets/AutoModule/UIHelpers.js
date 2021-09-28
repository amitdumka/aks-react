//Global Settings
export const SizePerPageList = [
    { text: "5", value: 5 },
    { text: "7", value: 7 },
    { text: "10", value: 10 },
    { text: "15", value: 15 },
    { text: "20", value: 20 }
  ];

  //using hooks in class
  // function withMyHook(Component) {
  //   return function WrappedComponent(props) {
  //     const myHookValue = useMyHook();
  //     return <Component {...props} myHookValue={myHookValue} />;
  //   }
  // }
  // class MyComponent extends React.Component {
  //   render(){
  //     const myHookValue = this.props.myHookValue;
  //     return <div>{myHookValue}</div>;
  //   }
  // }
  
  // export default withMyHook(MyComponent);