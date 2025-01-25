import { useInput } from "../../hooks/useInput";

// custom hook을 만들 때 주의 사항
// 1) custom hook의 함수 이름은 use로 시작하는 것이 좋다(useInput)
// 2) 파일 이름은 ㅝㄴ하는 대로(useInput)
export const CustomHook = () => {
    const [title, onChangeTitleHandler] = useInput();
    const [body, onChangeBodyHandler] = useInput();
    return( 
    <>
    <input type="text" name="title" value={title} onChange={onChangeTitleHandler} />
    <input type="text" name="body" value={body} onChange={onChangeBodyHandler}/>
    </>
    );
}