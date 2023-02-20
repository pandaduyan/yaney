let $ = {
Bilibili:'https://www.bilibili.com',
Baidu:'https://www.baidu.com',
YouTube:'https://www.youtube.com/',
Google:'https://www.google.com/generate_204',
Github:'https://www.github.com'
}

!(async () => {
await Promise.all([http($. Baidu),http($. Bilibili),http($. Github),http($. Google),http($. YouTube)]).then((x)=>{
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
