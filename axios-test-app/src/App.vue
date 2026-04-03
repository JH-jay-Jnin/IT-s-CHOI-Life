<template>
  <div>
    <h2>콘솔을 확인해주세요.</h2>
  </div>
</template>

<script setup>
//axios로 json-server로 접속해서 todos의 crud 작업을 해보려고 함.

import axios from 'axios'; // node_modles에 설치된 'axios'

// axios 할 수 있는 함수를 만들어보자.
// 화살표 함수를 권장
const requestAPI = () => {
  // const url = 'http://localhost:3000/todos/2';
  const url = 'api/todos/2';
  // let result = axios.get(URL); // 오래걸린 경우 비동기함수(동시에 실행하는 함수)
  // console.log(result);
  // axios.get(ulr).then(get한 이후 결과를 처리할 내용).cathch(에러가 발생했을 때 처리할 내용);
  // 위 코드에서, then을 써서 비동기를 맞춰줌. // 그리고 뒤에 .catch()를 넣으면 에러도 잡아주다.
  axios
    .get(url)
    .then((response) => {
      // 결과를 받을 변수를 괄호 내 괄호, 그리고 그것에 대한 자세한 설명을 => {}로
      console.log(response);
      console.log('============================');
      console.log(response.data);
      // 보통 왠만하면 data나 status를 사용한다.
    })
    .catch((e) => {
      console.log(e);
    });
};

//await를 쓰려면, 반드시 async를 쓰자!
const requestAPI2 = async () => {
  const url = '/api/todos/22';
  // 원격으로 http를 연결할 때는 네트워크로 연결하므로 에러가 발생할 가능성이 크다.
  // 에러 처리도 같이 해주면 좋다.
  // async~await인 경우 try~catch로 해주고
  // then인 경우에는 catch만 붙여주면 됨.
  try {
    // 에러가 발생할 여지가 큰 코드를 넣어줌.
    let response = await axios.get(url);
    console.log(response.data);
    // try 안에서 에러가 발생하면 catch함수가 자동으로 실행(호출) 됨.
  } catch (e) {
    console.log(e);
  }
};
// async await를 쓸 경우, catch를 쓸 자리가 없기 때문에, 교안 35페이지를 참고하여 작성해보자.

// 함수를 호출해보자.
//requestAPI();
requestAPI2();
</script>

<style></style>
