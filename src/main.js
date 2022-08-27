import { createApp } from 'vue';

import ContactsApp from './ContactsApp.vue';
import ContactDetails from './components/ContactDetails.vue';
import NewContact from './components/NewContact.vue';

const app = createApp(ContactsApp);

app.component('contact-details', ContactDetails);
app.component('new-contact', NewContact);

app.mount('#app');
