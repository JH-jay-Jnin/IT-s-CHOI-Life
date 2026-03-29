<template>
  <div id="app" class="container-lg mt-4">
    <div class="card card-body bg-light">
      <div class="title">우리반 Contact ❤️</div>
    </div>

    <!-- 연락처 입력 폼 -->
    <ContactForm @add-contact="addContact" />

    <!-- 연락처 목록 -->
    <ContactList :contacts="contacts" @delete-contact="deleteContact" />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';

export default {
  name: 'App',
  components: {
    ContactForm,
    ContactList,
  },

  data() {
    return {
      contacts: [
        {
          id: 1,
          name: '홍길동',
          gender: '남',
          age: 20,
          email: 'hong@example.com',
          github: 'hongGD',
        },
        {
          id: 2,
          name: '짱구',
          gender: '남',
          age: 7,
          email: 'janggu@example.com',
          github: 'janggu',
        },
        {
          id: 3,
          name: '유리',
          gender: '여',
          age: 7,
          email: 'yuri@example.com',
          github: 'yuri',
        },
      ],
    };
  },

  methods: {
    addContact(contact) {
      const newId =
        this.contacts.length > 0
          ? Math.max(...this.contacts.map((c) => c.id)) + 1
          : 1;

      this.contacts.push({
        id: newId,
        ...contact,
      });
    },

    deleteContact(id) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    },
  },
};
</script>
