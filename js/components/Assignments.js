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
            assignments: [],
        }
    },
    created(){
        fetch('http://localhost:3001/assisgnments')
            .then(response => response.json())
            .then((assignments) => {
                this.assignments = assignments;
            });
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