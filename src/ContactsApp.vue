<template>
  <section>
    <header>
      <h1>My Contacts</h1>
    </header>

    <h2>Create New Contact</h2>
    <div>
      <new-contact @add-new-contact="addNewContact"></new-contact>
    </div>

    <h2>Contacts List</h2>
    <ul>
      <contact-details
        v-for="contact in contacts"
        :key="contact.id"
        :id="contact.id"
        :name="contact.name"
        :phone-number="contact.phone"
        :email-address="contact.email"
        :is-favorite="contact.isFavorite"
        @toggle-contact-favorite="toggleContactFavoriteStatus"
        @delete-contact="deleteContact"
      ></contact-details>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contacts: [],
    };
  },

  methods: {
    addNewContact(contact) {
      this.contacts.push(contact);
    },
    deleteContact(contactId) {
      this.contacts = this.contacts.filter(
        (contact) => contact.id != contactId
      );
    },
    toggleContactFavoriteStatus(contactId) {
      var contact = this.contacts.find((contact) => contact.id == contactId);
      contact.isFavorite = !contact.isFavorite;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
  text-align: center;
  padding: 10px 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  margin: 2%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>