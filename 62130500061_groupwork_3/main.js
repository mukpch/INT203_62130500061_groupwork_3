const app = {
    data() {
        return {
            tasks: [
                
                
                {
                    title: 'Shiba Inu',
                    imgUrl: './images/Shiba.jpg',
                    done: false
                },
                {
                    title: 'Pug',
                    imgUrl: './images/Pug.jpg',
                    done: false
                },
                {
                    title: 'Pomeranian',
                    imgUrl: './images/Pomeranian.jpg',
                    done: false
                },



                {
                    title: 'Chihuahua',
                    imgUrl: './images/Chihuahua.jpg',
                    done: false
                },
                {
                    title: 'Chow Chow',
                    imgUrl: './images/ChowChow.png',
                    done: false
                },
                {
                    title: 'Shih Tzu',
                    imgUrl: './images/ShihTzu.jpg',
                    done: false
                },

                

                {
                    title: 'Poodle',
                    imgUrl: './images/Poodle.jpg',
                    done: false
                },
                {
                    title: 'Golden Retriever',
                    imgUrl: './images/GoldenRetriever.jpeg',
                    done: false
                },
                {
                    title: 'Siberian Husky',
                    imgUrl: './images/SiberianHusky.jpg',
                    done: false
                },
                

                
                {
                    title: 'Corgi',
                    imgUrl: './images/Corgi.jpg',
                    done: false
                },
                {
                    title: 'Beagle',
                    imgUrl: './images/Beagle.jpg',
                    done: false
                },
                {
                    title: 'Thai Bangkaew',
                    imgUrl: './images/ThaiBangkaew.jpg',
                    done: false
                },

                

                
                {
                    title: 'Bulldog',
                    imgUrl: './images/Bulldog.jpg',
                    done: false
                },
                {
                    title: 'Labrador',
                    imgUrl: './images/Labrador.jpeg',
                    done: false
                },
                {
                    title: 'American Pit Bull Terrier',
                    imgUrl: './images/PitBull.jpg',
                    done: false
                },
                
                
                
            ]
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
    },
    computed: {
        countUndone() {
            return this.tasks.length;
        },
    },
};
Vue.createApp(app).mount("#app");