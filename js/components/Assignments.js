import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components:{ AssignmentList, AssignmentCreate },
    template: 
    /*html*/
    `
    <section class="space-y-6">
        <assignmentList :assignments="filters.inProgress" title="In Progress" ></assignmentList>
        <assignmentList :assignments="filters.completed" title="Completed"></assignmentList>

        <assignmentCreate @add="add"></assignmentCreate>
    </section>
    `,
    data(){
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read Chapter 4', complete: false, id: 2},
                {name: 'Turn in Homerwork', complete: false, id: 3},
            ],
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
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }
    }
}