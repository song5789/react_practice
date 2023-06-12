// Props 태그의 속성
// 부모 컴포넌트에서 자식으로 데이터를 전송함
// Props 값이 변경되면 re-rendering 함.

import { Component } from "react";
import propTypes from "prop-types";

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

// class Props extends Component {
//   render() {
//     let { name, age } = this.props;
//     return (
//       <div>
//         <div>
//           {name} / {age}
//         </div>
//         {/* props.children 자식 요소의 값 */}
//         <div>{this.props.children}</div>
//       </div>
//     );
//   }
// }

const Props = (props) => {
  let { name, age } = props;
  return (
    <div>
      <div>
        {name}, {age}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

// 함수형은 this 가 없음.

// 기본값 설정
Props.defaultProps = {
  name: "김길동",
  age: 27,
};

// 타입 체크
// isRequred = 필수값 설정.
Props.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired,
};

export default Props;
