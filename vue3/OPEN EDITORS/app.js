const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: '123@gmail.com',
            gendel: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
})

app.mount('#app')