const express = require('express'); //要求express
const app = express();

app.engine('html', require('ejs').renderFile); // 使用html解析
app.set('view engine', 'ejs'); // view engine為固定格式, 使用ejs引擎(可置換)


app.get('/home', function (req, res)  // 進入首頁，req;request（要求）和 res;response（回應）
{
    res.render('index.html'); //呈現視圖範本;回應物件 (res) 中的方法可以傳送回應給用戶端，並終止要求/回應循環
});

app.get('/member', function (req, res) {
	res.render('member.html');
});

app.get('/member/:ID', function (req, res) { // /member/:ID 前面加個冒號表示這個是在網址上會變動的一個參數
	res.render('memberprofile.html');
});

app.listen(3000, function () {
	console.log('This is port 3000 Bro !!'); //通過呼叫該console物件的log()函式，可以在控制檯中列印資訊
});

/*
express替不同HTTP Method、不同URL路徑的requests編寫不同的處理方法
透過整合「畫面」的渲染引擎來達到插入資料到樣板中產生response
設定常見的web應用設定，例如：連線用的port和產生response的樣板位置
在request的處理流程中增加額外的「中間層」進行處理 
*/