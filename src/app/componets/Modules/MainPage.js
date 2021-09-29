// import React, { Suspense } from "react";
// import { Redirect, Switch } from "react-router-dom";
// import { LayoutSplashScreen, ContentRoute } from "../../../_aks/layout";

// export default class MainPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: props.title, values: props };
//   }
//   render() {
//     return (
//       <>
//         <Suspense fallback={<LayoutSplashScreen />}>
//           <Switch>
//             {
//               <Redirect
//                 exact={true}
//                 from={this.BasePath}
//                 to={this.DefaultPath}
//               />
//             }
//             {this.ComponentList.map((item) => (
//               <ContentRoute
//                 path={this.BasePath + item.path}
//                 component={item.component}
//               />
//             ))}
//           </Switch>
//         </Suspense>
//       </>
//     );
//   }
// }
