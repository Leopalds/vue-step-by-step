export default{
    template:
    /*html*/
    `
    <li>
        <label>
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.complete">
        </label>
    </li>
    `,
    props: {
        assignment: Object
    }
}