import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components:{ AssignmentList, AssignmentCreate },
    template: 
    /*html*/
    `
    <section class="flex gap-8">
        <assignment-list :assignments="filters.inProgress" title="In Progress" >
            <assignment-create @add="add"></assignment-create>
        </assignment-list>

        <div v-show="showCompleted">
            <assignment-list
                :assignments="filters.completed"
                title="Completed"
                can-toggle
                @toggle="showCompleted = !showCompleted"
            ></assignment-list>
            <span>BLA BLA BLA</span>
        </div>
    </section>
    `,
    data(){
        return {
            assignments: [],
            showCompleted: true,
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