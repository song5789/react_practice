import { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          id: 1,
          name: "홍길동",
          age: 25,
        },
        {
          id: 2,
          name: "김길동",
          age: 28,
        },
        {
          id: 3,
          name: "최길동",
          age: 30,
        },
      ],
      memId: 4,
      textValue: "",
    };
  }

  onChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };

  onAddMember = () => {
    const { members, textValue, memId } = this.state;
    const splitText = textValue.split(" ");
    this.setState({
      memId: memId + 1,
      members: members.concat([{ id: this.state.memId, name: splitText[0], age: splitText[1] }]),
      textValue: "",
    });
  };

  render() {
    const { members, textValue } = this.state;
    const listMember = members.map((member) => (
      <li key={member.id}>
        {member.id}. {member.name} / {member.age}
      </li>
    ));

    return (
      <>
        <div>
          <input style={{ width: 300, height: 25 }} type="text" value={textValue} onChange={this.onChange} placeholder="이름 나이(띄어쓰기로 구분해 입력)" />
          <input type="button" value="add" onClick={this.onAddMember} />
        </div>
        <ul>{listMember}</ul>
      </>
    );
  }
}

export default Member;
