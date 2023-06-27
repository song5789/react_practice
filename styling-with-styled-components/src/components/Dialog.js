import s, { keyframes, css } from "styled-components";
import Button from "./Button";
import { useEffect, useState } from "react";

const fadeIn = keyframes`
0% {
    opacity: 0
}
100% {
    opacity: 1
}
`;

const slideUp = keyframes`
0% {
    transform: translateY(200px);
}
100% {
    transform: translateY(0px);
}
`;

const fadeOut = keyframes`
0% {
    opacity: 1;
}
100% {
    opacity: 0;
}
`;

const slideDown = keyframes`
0% {
    transform: translateY(0px);
}
100% {
    transform: translateY(200px);
}
`;

const DarkBackground = s.div`
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.8);

animation: ${fadeIn} 0.25s ease-out forwards;

${(props) =>
  props.disappear &&
  css`
    animation-name: ${fadeOut};
  `}
`;

const DialogBlock = s.div`
width: 320px;
padding: 1.5rem;
background: white;
border-radius: 2px;
h3 {
    margin: 0; 
}
p {
    font-size: 1.125rem;
}

animation: ${slideUp} 0.25s ease-out forwards;

${(props) =>
  props.disappear &&
  css`
    animation-name: ${slideDown};
  `}
`;

const ButtonGroup = s.div`
margin-top: 3rem;
display: flex;
justify-content: flex-end;
`;

const ShortMarginButton = s(Button)`
& + & {
    margin-left: 0.5rem;
}
`;

function Dialog({ title, children, confirmText, cancelText, onConfirm, onCancel, visible }) {
  const [visibleState, setVisibleState] = useState({
    animate: false,
    localVisible: visible,
  });

  const { animate, localVisible } = visibleState;

  useEffect(() => {
    if (localVisible && !visible) {
      setVisibleState((state) => ({
        ...state,
        animate: true,
      }));
      setTimeout(() => setVisibleState((state) => ({ ...state, animate: false })), 250);
    }
    setVisibleState((state) => ({ ...state, localVisible: visible }));
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default Dialog;
