<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "- favorite" : "" }}</h2>
    <button @click="toggleContactFavorite">Favorite</button>
    <button @click="deleteContact">Delete</button>
    <!-- <button @click="$emit('delete-contact', this.id)">Delete</button> -->
    <br />
    <button @click="toggleContactDetails">
      {{ contactDetailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="contactDetailsVisible">
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite',
  // ],

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: ["toggle-contact-favorite", "delete-contact"],

  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) return true;
  //     else return false;
  //   },
  // },

  data() {
    return {
      contactDetailsVisible: false,
    };
  },
  methods: {
    toggleContactDetails() {
      this.contactDetailsVisible = !this.contactDetailsVisible;
    },
    deleteContact() {
      this.$emit("delete-contact", this.id);
    },
    toggleContactFavorite() {
      this.$emit("toggle-contact-favorite", this.id);
    },
  },
};
</script>