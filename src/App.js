import React from "react";
import "./App.css";

function App() {
  // 1. JSX javascript value
  // JSX는 자바스크립트의 값이다. (-> 함수의 인자로 전달, 변수에 저장 등 가능, 함수의 리턴값으로 사용 가능 등) // JavaScript Value
  //  const title = <h1>Hello World!!</h1>;
  // return title;

  // 2. JSX 자바스크립트 값을 포함할 수 있다.
  // {}
  // 자바스크립트 '값'만이 {} 중괄호 내부에 사용되어 JSX에서 사용할 수 있다.
  // => 함수의 리턴값은 값이기에 가능하지만, if문 for문은 값이 아니기에 JSX안에서 사용 불가.
  // 값인지 여부 파악 : 변수에 담을 수 있는지 생각해보기

  // 3. JSX 속성 정의
  // HTML, JavaScript, -> 자바스크립트에 더 가깝기 때문에 camelCase 사용
  // class -> className , tabindex -> tabIndex
  // {}, ""

  // 4. Event 처리하기
  // on + 이벤트 명
  // 값으로는 자바스크립트 함수가 들어간다.

  // 5. inline style
  // JavaScript Object의 형식으로 인라인 스타일을 작성한다.
  // 속성명은 카멜케이스로 작성
  // JSX 내부에서 바로 스타일을 주려할 땐, {자바스크립트 값{스타일을 오브젝트 형식으로 작성}}

  // 6. JSX Closing
  // <img> 닫는 태그 없이는 정상적으로 작동하지 않는다.
  // => <img/> or <img></img>
  // 어떤 태그등 self-closing 문법을 사용할 수 있다. ex. <div/>

  // 7. 하나의 부모 태그로 감싸져 있어야 한다.

  // 9. React.Fragment
  // => 실제 브라우저 상에선 추가되지 않으면서, JSX를 그룹화하기 위해서만 사용하는 tag
  // 실제 div 태그는 사용하지 않으면서, 그룹화할 수 있게 해주는 tag
  // 실제 dom 상에서는 tag로 추가되지 않는다.
  // import React from "react"; : 리액트 패키지를 import 해줘야 사용 가능하다
  // <React.Fragment></React.Fragment>
  // <></>

  const name = "문유현";
  const addOne = (num) => {
    return num + 1;
  };

  const title = "subject";

  const introduce = () => alert("Hello World");

  const style = {
    color: "red",
    backgroundColor: "yellow",
  };

  return (
    <>
      <h1
        className={title}
        onClick={introduce}
        style={{ color: "red", backgroundColor: "yellow" }}
        // style={style}
      >
        Hello {name}
        {addOne(2)}!!
      </h1>
      <p></p>
    </>
  );
}

export default App;
