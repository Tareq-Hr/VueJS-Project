new Vue({
    el : '#app',
    data : {
        text : 'I am a text from vue js',
        src: 'https://www.google.com'
    },
    methods : {
        ShowText : function(test){
            return test
        }
    }
})