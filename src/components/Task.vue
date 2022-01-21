<template>
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      {{ task.name }}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      {{ task.title }}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span
        v-if="task.status"
        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        Done
      </span>
      <span
        v-else
        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
      >
        pending
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ task.date }}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ task.time }}
    </td>
    <td className="py-4 whitespace-nowrap text-right flex gap-2 justify-center text-sm font-medium">
      <button
        @click="$emit('complete', task.id)"
        className="hover:text-indigo-900 bg-green-500 p-1 rounded text-white"
      >
        Complete
      </button>
        <button
        @click="exampleModalShowing = true"
        className="hover:text-indigo-900 bg-blue-500 p-1 rounded text-white"
      >
        Update
      </button>
      <button
        @click="$emit('deleteTask', task.id)"
        className="hover:text-indigo-900 bg-red-500 p-1 rounded text-white"
      >
        Delete
      </button>
    </td>
  </tr>
        <UpdateModal
        :showing="exampleModalShowing"
        @close="exampleModalShowing = false"
        :taskData=task
      />
</template>

<script>
import UpdateModal from "./UpdateModal.vue";
export default {
  name: "Task",
  data(){
      return {
          exampleModalShowing: false,
      }
  },
  components: {
    UpdateModal,
  },
  props: {
    task: Object,
  },
  emits: ["complete", "deleteTask"],
};
</script>