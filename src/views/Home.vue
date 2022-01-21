<template>
  <div class="home p-4 m-4">
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
        >
          <div
            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody
                v-for="task in $store.state.tasks"
                :key="task"
                className="bg-white divide-y divide-gray-200"
              >
                <Task
                  :task="task"
                  @complete="complete"
                  @deleteTask="deleteTask"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Task from "@/components/Task.vue";
import cogoToast from 'cogo-toast';

export default {
  name: "Home",

  components: {
    Task,
  },
  methods: {
    complete(id) {
      let task = this.$store.state.tasks.find((tx) => tx.id === id);
      task.status = true;
      cogoToast.info("Task is Completed")
    },
    deleteTask(id) {
      let index = this.$store.state.tasks.findIndex((tx) => tx.id === id);
      this.$store.state.tasks.splice(index, 1);
      cogoToast.info("Task is Deleted")
    },
  },
};
</script>
