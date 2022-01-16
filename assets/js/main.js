//Data Binding and init VueJS

new Vue({
    el : '#app',
    data : {
        text : 'I am a text from VueJS',
        src: 'https://www.google.com'
    },
    methods : {
        ShowText : function(test){
            return test
        }
    }
});


//Events in VueJS
new Vue({
    el   : '#events',
    data : {
        title : 'Events in VueJS',
        counter : 0
    },
    methods : {
        inc : function() {
            this.counter++
        },
        dec : function() {
            this.counter--
        },
        reset : function() {
            this.counter = 0
        }
    }
})


//Events Modifier in VueJS
new Vue({
    el   : '#events_modifier',
    data : {
        title : 'Events Modifier in VueJS',
        description : 'Execute Inc Function just one time',
        counter : 0
    },
    methods : {
        inc : function() {
            this.counter++
        },
    }
})


//V-models in VueJS
new Vue({
    el   : '#vmodels',
    data : {
        title : 'V-models',
    }
})