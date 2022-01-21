<template>
  <div class="p-4 m-4">
    <div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Names
          </label>
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="name"
            type="text"
            placeholder="Type Name"
            v-model="name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Task Title
          </label>
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="title"
            type="text"
            placeholder="Type task Title"
            v-model="title"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
            Date
          </label>
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="date"
            type="date"
            v-model="date"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="time">
            Time
          </label>
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="time"
            type="time"
            v-model="time"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
            type="button"
            @click="save"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import cogoToast from 'cogo-toast';
export default {
  name: "AddTodo",
  data() {
    return {
      name: "",
      title: "",
      date: "",
      time: "",
    };
  },
  methods: {
    save(e) {
      e.preventDefault();
      const task = {
        id: uuid.v4(),
        name: this.name,
        title: this.title,
        date: this.date,
        time: this.time,
        status: false,
      };
      try {
        this.$store.dispatch("save", task);
        this.name = "";
        this.title = "";
        this.date = "";
        this.time = "";
      } catch (error) {
          cogoToast.error(error.message);
      }
    },
  },
};
</script>