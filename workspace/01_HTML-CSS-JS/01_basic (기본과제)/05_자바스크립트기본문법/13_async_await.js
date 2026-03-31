const { children } = require('react');

async function getData() {
  //getData라는 비동기 함수를 선언
  // async를 함수 앞에 붙이면 이 함수는 Promise를 반환하고
  // 함수 내에서 await를 사용할 수 있다.

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  // fetch() : 서버에 비동기 요청을 보내는 함수
  // await() : 서버에서 응답이 올때까지 기다린다.

  //   console.log(response); ==> 꼭 찍어서 확인해보자

  const data = response.json();
  // json() : 응답 데이터 JSON(문자열) -> JS 객체로 변환 {key : value}로!
  //   console.log(data); ==> 꼭 직어서 확인해보자

  // 응답 받은 데이터로 화면 만들기
  const td = document.querySelectorAll('#tbody1>tr>td');
  console.log(td);

  td[0].innerHTML = data.userId;
  td[1].innertext = data.id;
  td[2].innertext = data.title;
  // 변수명(=객체명).key값 : value 얻어오기
}
// 여기까지 하면 연결이 안된거라 html 파일로 돌아가서 연결해야함
