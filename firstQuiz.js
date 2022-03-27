alert("世界遺産クイズを始めます。OKを押して始めてください。");

//問題リスト「["",""],」をコピペで作成
let Quiz = [
    ["ブナの原生林がある世界遺産は何か？", "白神山地"],
    ["北海道の世界遺産、「知床」の名前の由来とはアイヌ語で何か？", "シリエトク"],
    ["世界遺産とはすべてなんという価値を持っているか？", "顕著な普遍的価値"],
    ["1972年にユネスコ総会で採択された条約の正式名称とは何か？", "世界の文化遺産及び自然遺産の保護に関する条約"],
    ["「イエローストーン国立公園」などの世界で初めての世界遺産が登録されたのは何年か？", "1978年"],
    ["1978年に初めて世界遺産が登録されたが、それは何件登録されたか？", "12件"],
    ["ユネスコの正式名称とは何か？漢字で答えなさい", "国際連合教育科学文化機関"],
    ["ユネスコの本部とはどこにあるか？地域名を答えなさい", "パリ"],
    ["「戦争は人の心の中に生まれるものだから、人の心の中にこそ、平和のとりでを築かなければならない」という文章は何に記されているか？", "ユネスコ憲章"],
    ["人間が自然環境をいかしながらつくり上げた固有の文化がみられる景観のことを何というか？", "文化的景観"],
    ["ユネスコの英語表記を大文字で答えなさい", "UNESCO"],
    ["世界遺産リストに載せるかどうかを決めるために年に1度開かれる会とは何か？", "世界遺産委員会"],
    ["世界遺産委員会とは何か国で構成されているか？", "21か国"],
    ["世界遺産になるための条件の1つ目は、公式教材で、何であることと記されているか？漢字3文字で答えなさい", "不動産"],
    ["各国の世界遺産登録を目指す候補が記されたリストのことを何というか？", "暫定リスト"],
    ["日本が世界遺産条約を締結したのは、ユネスコで採択してから何年後のことか？", "20年後"],
    ["日本最初の世界遺産、「法隆寺地域の仏教建造物群」「姫路城」「白神山地」「屋久島」の4件が登録されたのは何年か？", "1993年"],
    ["アジア人初のユネスコ事務局長を務めた日本人とは誰か？", "松浦晃一郎"],
    ["日本は世界何位の規模でユネスコの分担金を支払っているか？", "2位"],
    ["遺産の保護はその国自身に義務と責任があるが、遺産の保護が十分でない場合は何という基金で援助が行われるか？", "世界遺産基金"],
];


//問題の表示の関数
let Q = document.getElementById("mondai");
//正解数
let correct = 0;
//問題数
let Qcnt = 0;
//問題リストからランダムに表示する乱数
var rundom = Math.floor(Math.random() * Quiz.length);
//問題数の表示の関数
let count = document.getElementById("cnt");
//問題数を決定する関数
let mondaisu = 10;




//問題と問題数の表示
function Qset() {
    Q.textContent = Quiz[rundom][0];
    count.textContent = ("第" + (Qcnt + 1) + "問目");
};

Qset();


//正誤判定と繰り返しの判定
function Answer_check() {
    document.getElementById("ansB").onclick = function () {
        const ansans = document.getElementById("answer").value;
        console.log(ansans);
        if (ansans == Quiz[rundom][1]) {
            alert("正解です。");
            correct++;
        } else {
            alert("不正解です。正解は「" + Quiz[rundom][1] + "」でした。");
        }
        Qcnt++;
        //テキストボックスを空に
        document.getElementById("answer").value = "";
        //問題リストからランダムに表示する乱数
        rundom = Math.floor(Math.random() * Quiz.length);
        count.textContent = ("");
        if (Qcnt >= mondaisu) {
            //結果発表
            Q.textContent = "問題は以上です。" + correct + "問正解しました。";
            //ボタンをとテキストボックスを非表示
            document.getElementById("ansB").style.visibility = "collapse";
            document.getElementById("answer").style.visibility = "collapse";
        } else {
            Qset();
        }
    };
}

Answer_check();
