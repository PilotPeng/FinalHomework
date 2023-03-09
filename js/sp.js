var num = location.search.slice(1, 3);
var data = new Array({
	'img': 'pifu1.png',
	'title': '那个男人给她刻上了名字',
	'from': 'UZI',
	'content': '永远滴神',
	'price': '49.50',
	'time': 15//开抢时间，下午3点
}, {
	'img': 'pifu2.png',
	'title': '镖',
	'from': '来自代练推荐：',
	'content': '上分',
	'price': '39.50',
	'time': 14
}, {
	'img': 'pifu3.png',
	'title': '等我的Q叠到1000你们就都死了',
	'from': '来自黑铁1推荐：',
	'content': '我怎么用Q连兵都打不死',
	'price': '79.80',
	'time': 15
}, {
	'img': 'pifu4.png',
	'title': '王牌飞行员申请出战',
	'from': '来自FAKER推荐：',
	'content': 'ADC是什么，被我秒QAQ',
	'price': '79.50',
	'time': 16
}, {
	'img': 'pifu5.png',
	'title': '我的蛮王呢',
	'from': '来自jk推荐：',
	'content': '神呢？',
	'price': '59.00',
	'time': 17
}, {
	'img': 'pifu6.png',
	'title': '小学生之手',
	'from': '来自小C推荐：：',
	'content': '哈撒剋',
	'price': '98.00',
	'time': 18
}, {
	'img': 'pifu7.png',
	'title': '变大',
	'from': '',
	'content': '',
	'price': '98.00',
	'time': 19
}, {
	'img': 'pifu11.png',
	'title': '嗒嗒嗒嗒嗒嗒嗒嗒嗒',
	'from': '来自TheShy推荐：',
	'content': '超鬼上路',
	'price': '98.00',
	'time': 20
}, )
var current = data[num - 1];
now();
function now() {
	var nowDate = new Date();
	
	//后三个参数，current.time 上面对象的时间，0 分针，0 秒针
	var newDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), current.time==0?nowDate.getDate()+1:nowDate.getDate(), current.time, 0, 0);
	
	var t = Math.floor((newDate - nowDate) / 1000);
	var secKillTimer = null;
	document.getElementById('main').innerHTML =`
		<div class="img">
			<img src="img/${current.img}" >
		</div>
		<div class="text">
			<h2>${current.title}</h2>
			<span class="from">${current.from}</span>
			<span class="content">${current.content}</span>
			<div class="time">
				<span>0</span><span>0</span> : <span>0</span><span>0</span> : <span>0</span><span>0</span>
			</div>
			<div class="bottom">
				<span class="price">￥${current.price}</span>
				<span class="buy">确认购买</span>
			</div>
		</div>
	`
	secKillTimer = setInterval(function() {
		t--;
		if (t < 0) {
			document.getElementsByClassName('buy')[0].style.background='#fecb30';
			document.getElementsByClassName('buy')[0].style.color='red';
			document.getElementsByClassName('buy')[0].style.cursor='pointer';
			clearInterval(secKillTimer);
			return false;
		}
		var h = Math.floor(t % 86400 / 3600);
		var m = Math.floor(t % 3600 / 60);
		var s = Math.floor(t % 60);
		var str = toTwo(h) + toTwo(m) + toTwo(s);
		console.log(str);
		document.getElementsByClassName('time')[0].innerHTML =`
			<span>${str.substring(0,1)}</span><span>${str.substring(1,2)}</span> : <span>${str.substring(2,3)}</span><span>${str.substring(3,4)}</span> : <span>${str.substring(4,5)}</span><span>${str.substring(5,6)}</span>
		`
	}, 1000);
	
}

function toTwo(n) {
	return n = n > 9 ? '' + n : '0' + n;
}
