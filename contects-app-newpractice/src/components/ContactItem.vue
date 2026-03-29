<template>
  <tr>
    <td>{{ contact.name }}</td>
    <td>{{ contact.gender }}</td>
    <td>{{ contact.age }}</td>
    <td>{{ contact.email }}</td>
    <td>{{ contact.githubId }}</td>
    <td>
      <button type="button" class="btn btn-danger btn-sm">삭제</button>
    </td>
  </tr>
</template>
<!-- <tr> : 표의 한 줄  /  <td> : 표 안의 한 칸-->

<script>
export default {
  name: 'ContactItem',
  props: { contact: { type: Obeject, required: true } },
  // ContactList.vue에서 <ContactItem v-for="contact in contacts" :key="contact.id" :contact="contact" />
  // 위와 같이 보냈으니, props를 이용해서 받는다. 또한, 한 사람의 정보는 "객체" 이기 때문에
  // type : Obejct로 받아야한다. required: true는 "이 값은 반드시 받아야한다" 라는 뜻인 기능이다.
};
</script>
