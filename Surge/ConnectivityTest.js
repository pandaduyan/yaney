let $ = {
bilibili:'https://www.bilibili.com',
baidu:'https://www.baidu.com',
youtube:'https://www.youtube.com/',
google:'https://www.google.com/generate_204',
github:'https://www.github.com'
}

!(async () => {
await Promise.all([http($.baidu),http($.bilibili),http($. github),http($. google),http($.youtube)]).then((x)=>{
	$done({
    title: '网络连通性测试',
    content: x.join('\n'),
    icon: 'timer',
    'icon-color': '#2b7bf6',
  })
})
})();

function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post(req, (err, resp, data) => {
            r(req.split(".")[1]+
						'\xa0\xa0\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}