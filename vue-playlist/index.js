var app1 = new Vue({
	el:'#app1',
	data:{
		name:'vue',
		desc:'getName is vue',
		website:"www.baidu.com",
		seen:false
	},
	methods:{
		getName :function(){
		return this.desc;
		}
	}
})
/*
	el(元素) 对应容器id 
	data: 存储数据
	methods: 存储方法
*/