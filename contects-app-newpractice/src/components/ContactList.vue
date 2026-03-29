<template>
  <div class="contact-list mt-3">
    <table class="table">
      <thead>
        <tr>
          <th>이름</th>
          <th>성별</th>
          <th>나이</th>
          <th>이메일</th>
          <th>Github ID</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        <ContactItem
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
        />
        <!-- 
        1. v-for="contact in contacts"  => App.vue에서 가져온 contacts 배열 안에 있는 데이터를 하나씩 꺼낸다.
        2. :key="contact.id" => Vue가 반복되는 항목들을 구분하기 위한 고유값이다. 그 중에서도 항상 고유값인 id를 선택해서 지정(v-for가 오면 그냥 당연히 와야함.)
        3. :contact="contact" => 현재 반복에서 꺼낸 한 사람의 정보를 ContactItem에 전달하는 것.
        -->
      </tbody>
    </table>
  </div>
</template>

<script>
import ContactItem from './ContactItem.vue';

export default {
  name: 'Contactlist',
  components: {
    ContactItem,
  },
  // props : 부모 컴포넌트에서 전달된 데이터
  props: ['contacts'],
};
</script>
