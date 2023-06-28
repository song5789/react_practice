import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 중앙에 위치 */
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  positon: relative !important;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock style={{ position: "relative" }}>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
