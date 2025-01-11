let カウント = 0;
let 式;
let 履歴;

document.getElementById('コピーボタン').addEventListener('click', () => {
    if (!式) {
        alert("コピーする内容がないよう！");
    } else {
        navigator.clipboard.writeText(式)
        .then(() => {
            alert("コピーできたよ～");
        })
        .catch(err => {
            alert("コピー失敗(´・ω・｀)");
        });
    }
});

//生成ボタンが押されたときの処理
      function 生成() {

        //変数の定義
        const 生成方法選択 = document.getElementById('生成方法選択');
        const 生成方法 =生成方法選択.value;
        const x1 = document.getElementById('x1').value;
        const y1 = document.getElementById('y1').value;
        const x2 = document.getElementById('x2').value;
        const y2 = document.getElementById('y2').value;
        const x3 = document.getElementById('x3').value;
        const y3 = document.getElementById('y3').value;
        const 日時 = new Date();
        let エラーメッセージ = "";

        //押されるたびに一増やす変数(履歴用)
        カウント++;

        //入力されているかをチェックし、エラーメッセージを生成
        if((生成方法 === "二点を通る直線(x1,y1)(x2,y2)")&&(!(x1&&y1&&x2&&y2))){
          エラーメッセージ = "x1,y1,x2,y2をすべて入力してください";
        }else if((生成方法 === "二点を通る直線(x1,y1)(x3,y3)")&&(!(x1&&y1&&x3&&y3))){
          エラーメッセージ = "x1,y1,x3,y3をすべて入力してください";
        }else if((生成方法 === "二点を通る直線(x2,y2)(x3,y3)")&&(!(x2&&y2&&x3&&y3))){
          エラーメッセージ = "x2,y2,x3,y3をすべて入力してください";
        }

        //エラーが発生しているときのみ処理を中断しメッセージを返す
        if(エラーメッセージ){
            alert(`${エラーメッセージ}\n\n詳しくはコンソールを見ろください`);
            console.log(

`履歴|No.${カウント}
エラー:${エラーメッセージ}
入力.x1:${x1},y1:${y1},x2:${x2},y2:${y2},x3:${x3},y3:${y3}
生成方法:${生成方法}
日時:${日時}`

            );
            return [カウント,エラーメッセージ];
        }
        
        //生成方法選択に応じて出力処理
        if(生成方法==="二点を通る直線(x1,y1)(x2,y2)"){
          直線出力式生成(x1,y1,x2,y2);
        }else 
        if(生成方法==="二点を通る直線(x1,y1)(x3,y3)"){
          直線出力式生成(x1,y1,x3,y3);
        }else
        if(生成方法==="二点を通る直線(x2,y2)(x3,y3)"){
          直線出力式生成(x2,y2,x3,y3);
        }
        //ここに順次追加予定
        
        //出力欄に反映
        document.getElementById("出力欄").textContent = `${生成方法}:${式}`;
        console.log(
`履歴|No.${カウント}
式:${式}
入力.x1:${x1},y1:${y1},x2:${x2},y2:${y2},x3:${x3},y3:${y3}
生成方法:${生成方法}
日時:${日時}`
        );

        return [履歴,カウント,式];
      }

        function 直線出力式生成(a,b,c,d){
          式 = `y=\\frac{(${d})-(${b})}{(${c})-(${a})}x+(${b})+\\frac{(${d})-(${b})}{(${c})-(${a})}(${a})`;
          return 式;
        }