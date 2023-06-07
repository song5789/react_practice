// Props 태그의 속성
// 부모 컴포넌트에서 자식으로 데이터를 전송함
// Props 값이 변경되면 re-rendering 함.

import { Component } from "react";

// const Props = (props) => {
//
//   );
// };

// function Props(props) {
//   console.log(props);
//   return (
//     <div>
//       {props.name} 나이{props.age}
//     </div>
//   );
// }

class Props extends Component {
  render() {
    let { name, age } = this.props;
    return (
      <div>
        {name}, Age : {age}
      </div>
    );
  }
}

export default Props;
