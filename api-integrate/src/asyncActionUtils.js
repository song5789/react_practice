// 이 함수는 파라미터로 액션 타입(예: GET_USER) 과 Promise 를 만들어주는 함수를 받아옵니다.
export function createAsyncDispatcher(type, promiseFn) {
  // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 새로운 함수를 만듭니다.
  // ...rest 를 사용하여 나머지 파라미터를 rest 배열에 담습니다.
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type }); // 요청 시작
    try {
      const data = await promiseFn(...rest); // rest 배열을 spread 로 넣어줍니다.
      dispatch({
        type: SUCCESS,
        data,
      }); // 성공함
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      }); // 실패함
    }
  }
  return actionHandler;
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

// 로딩중일 때의 상태
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 로딩에 성공했을 때의 상태를 만드는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

// 실패 했을 때의 상태를 만드는 함수
const error = (error) => ({
  loading: false,
  data: null,
  error,
});

// 세가지 액션을 처리하는 리듀서를 만들어주자
// type 은 액션타입, key 는 리듀서서 사용할 필드 이름이다(예: user, users)
export function createAsyncHandler(type, key) {
  // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  // 함수를 새로 만들어서
  function handler(state, action) {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  }

  //반환합니다.
  return handler;
}
