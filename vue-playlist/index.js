var app1 = new Vue({
	el:'#app1',
	data:{
		name:"",
		age:""
	},
	methods:{
		getName :function(){
		return this.desc;
		},
		setAge :function(){
			alert();
		this.age = '10000';
		}
	}
})
/*
	el(元素) 对应容器id 
	data: 存储数据
	methods: 存储方法
*/