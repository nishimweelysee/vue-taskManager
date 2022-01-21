<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="
        fixed
        inset-0
        w-full
        h-screen
        flex
        items-center
        justify-center
        bg-gray-200
        bg-opacity-50
      "
      @click.self="close"
    >
      <div class="relative w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4"
          @click.prevent="close"
        >
          ×
        </button>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
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
              v-model="task.name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
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
              v-model="task.title"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="date"
            >
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
              v-model="task.date"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="time"
            >
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
              v-model="task.time"
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
              @click="update"
            >
              Update
            </button>
          </div>
        </form>
        <slot />
      </div>
    </div>
  </Transition>
</template>
 
<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
    taskData: Object,
  },
  data() {
    return {
      task: this.taskData,
    };
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector("body").classList.add("overflow-hidden");
      }

      document.querySelector("body").classList.remove("overflow-hidden");
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    update() {
      alert(this.$data.task.id);
      let index = this.$store.state.tasks.indexOf(this.$data.task);
      this.$store.state.tasks[index]=this.$data.task;
    },
  },
};
</script>
 
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>