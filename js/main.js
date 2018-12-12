new Vue({
	el:'#app',
	data:{
		title: "Hello Word",
		styleCSS:''
	},
	methods:{
		changeTexts (){
			this.title = 'Какой-либо текст'
		}
	}
});