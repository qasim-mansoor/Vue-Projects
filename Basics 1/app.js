const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: "https://google.com",
            age: 20,
        }
    },
    methods: {
        increment() {
            this.age++
        },
        decrement() {
            this.age--
        },
        updateLastName(msg, event){
            this.lastName = event.target.value
            
            console.log(msg)
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        },
        
    },
    computed: {
        fullName(){
            console.log("Full name computer property was called")
            
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    },
    watch:{
        age(newVal, oldVal) {
            setTimeout(() => this.age = 20, 3000)
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000)