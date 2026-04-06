<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>
<script setup>
/** try - catch - finally
 * try{ } : 예외가 발생할 가능성이 있는 코드 => { } 안에 작성하면 된다.
 * catch(e){ } : 예외 발생 시 수행할 코드 => { } 안에 작성하면 된다.
 * finally { } : 마지막에 무조건 수행
 */

import axios from 'axios';
// 에러 처리 예제
const requestAPI = async () => {
  try {
    // 에러 발생 시 즉시 종료 후 catch문으로 이동
    const url = '/api/todos2';
    let response = await axios.get(url);
    console.log('응답 객체 : ', response); // try 구문에서 error 발생 시, 바로 catch문으로 넘어간다.
  } catch (e) {
    console.log('에러 발생 시에만 수행');
    if (e instanceof Error)
      console.log(e.message); // 에러 내용
    else console.log(e);
  } finally {
    // 무조건 수행
    console.log('finally');
  }
};
requestAPI(); // 함수 호출
</script>
