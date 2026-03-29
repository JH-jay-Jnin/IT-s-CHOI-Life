<template>
  <div id="app" class="container-lg">
    <div class="card card-body bg-light">
      <div class="title">우리반 Contact ❤️</div>
    </div>

    <!-- 연락처 입력 폼 -->
    <ContactForm />
    <!-- 연락처 목록 -->
    <ContactList :contacts="contacts" />
    <!-- :contacts ==> 자식이 받을 이름이고 "contacts"는 부모가 가지고 있는 props로 전달할 실제 데이터이다.-->
    <!-- 여기서 : (콜론)은 데이터 바인딩, 즉 v-bind를 의미한다.-->
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';
export default {
  name: 'App',
  components: { ContactForm, ContactList },

  data() {
    return {
      //props로 전달할 부모 데이터
      contacts: [
        {
          id: 1,
          name: '홍길동',
          gender: '남',
          age: 20,
          email: 'hong@example.com',
          github: 'hongGD',
          isEditing: false,
        },
        {
          id: 2,
          name: '짱구',
          gender: '남',
          age: 7,
          email: 'janggu@example.com',
          github: 'janggu',
          isEditing: false,
        },
        {
          id: 3,
          name: '유리',
          gender: '여',
          age: 7,
          email: 'yuri@example.com',
          github: 'yuri',
          isEditing: false,
        },
      ],
    };
  },
  methods: {
    /* contact 추가 */
    /* contact 삭제 */
  },
};
</script>
