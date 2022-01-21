import cogoToast from 'cogo-toast';
import { createStore } from 'vuex'

export default createStore({
    state: {
        tasks: []
    },
    mutations: {
        UPDATE_TASK(state, payload) {
            state.tasks = payload
        }
    },
    actions: {
        save(context,task) {
            const tasks = context.state.tasks;
            tasks.push(task);
            context.commit('UPDATE_TASK', tasks);
            cogoToast.success("Task Created Success")
        },
    },
    getters: {

    }
})