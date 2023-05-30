export default {
    template:
    /*html*/
    `
        <div class="flex gap-2">
            <button 
                @click="change(tag)" 
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,
    props: {
        'initial-tags': Array,
        'current-tag': String
    },
    computed:{
        tags(){
            return ['all', ...new Set(this.initialTags)];
        }
    },
    methods: {
        change(currentTag){
            this.$emit('change', currentTag);    
        }
    },
}