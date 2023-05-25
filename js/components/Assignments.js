import AssignmentList from "./AssignmentList.js";

export default {
    components:{ AssignmentList },
    template: 
    /*html*/
    `
    <section class="space-y-6">
        <assignmentList :assignments="filters.inProgress" title="In Progress" ></assignmentList>
        <assignmentList :assignments="filters.completed" title="Completed"></assignmentList>

        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    </section>
    `,
    data(){
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read Chapter 4', complete: false, id: 2},
                {name: 'Turn in Homerwork', complete: false, id: 3},
            ],
            newAssignment: '',
        }
    },
    computed: {
        filters(){
            return{
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },
    methods: {
        add(){
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}