// import { Component } from "react";
// type Buttons = {
//   text: string;
//   type: string;
// };
// export default class Button extends Component<Buttons> {
//   constructor(props: Buttons) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <button className={this.props.type}>{this.props.text}</button>
//       </div>
//     );
//   }
// }

// import { Component } from "react";
// type Buttons = {
//   types: [{ color: string; text: string }];
// };

// export default class Button extends Component<object, Buttons> {
//   constructor(props: object) {
//     super(props);
//     this.state = {
//       types: [
//         {
//           color: "blu",
//           text: "primary",
//         },
//         {
//           color: "red",
//           text: "secondary",
//         },
//       ],
//     };
//   }
//   render() {
//     return <div></div>;
//   }
// }
