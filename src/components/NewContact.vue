<template>
  <form @submit.prevent="addNewContact">
    <div>
      <label>Name</label>
      <input type="text" placeholder="henry azer" v-model="contact.name" />
    </div>
    <div>
      <label>Email</label>
      <input
        type="email"
        placeholder="henryazer@outlook.com"
        v-model="contact.email"
      />
    </div>
    <div>
      <label>Phone</label>
      <input
        type="tel"
        placeholder="+20 120 788 5279"
        v-model="contact.phone"
      />
    </div>
    <div>
      <button type="submit">Create Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        id: new Date().toISOString(),
        name: "",
        email: "",
        phone: "",
        isFavorite: false,
      },
    };
  },

  emits: ["add-new-contact"],

  methods: {
    addNewContact: function () {
      this.$emit("add-new-contact", this.contact);
      this.resetContact();
    },
    resetContact: function () {
      this.contact = {
        id: new Date().toISOString(),
        name: "",
        email: "",
        phone: "",
        isFavorite: false,
      };
    },
  },
};
</script>

<style>
</style>