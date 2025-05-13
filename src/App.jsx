import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row'>
          <a href="#" className='font-medium text-gray-900'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header >
      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium md-4'>NisshoCode<br />
              My Protfolio WebSite</h1>
            <p className='md-8 leading-relaxed'>
              現在、webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML,
              CSS,JavaScript,PHP,SQR,Reactなどweb全般とPythonです。自身が作ったものを公開しておりますので、ぜひ見ていってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center md-20'>
            <h1 className='text-2xl sm:text-3xl font-medium md-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてWEB
              さいとやwebAppを個人として受注しています。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしています。また、Pythonを使ってAIによる
              株価の予測サイトを構築しました。また数件の事業所のwebサイトの構築などの多岐にわたります。</p>
          </div>
          {/* カードのdivタグ */}
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS App</h2>
                </div>
                <div>
                  <p>クリックするとリンゴ狩りができるゲームです。子供でも楽しみながらクリック操作に慣れることができるかと思い考案しました。</p>
                  <a href="https://github.com/nagnagashi/my-apple.git" target="_blank" rel="noopener noreferrer"　className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>{/* md:w-1/3 p-4 */}
            {/* カードのdivタグ */}
            <div className='md:w-1/3 p-4'>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml2'>SNS App</h2>
                </div>
                <div>
                  <p>Reactとjavascriptで投稿機能付きのchatアプリ、仕様はReact,JavaSucript,html,css,frirebaseログイン・ログアウト認証
                    機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            
            </div>{/* md:w-1/3 p-4 */}
            {/* カードのdivタグ */}
            <div className='md:w-1/3 p-4'>
              <!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8" />
    <title>リンゴ狩りゲーム</title>
    <!-- <link rel="stylesheet" href="styles.css" /> -->
</head>

<body>
    <h1>リンゴ狩りゲーム</h1>
    <div id="orchard">
        <!-- リンゴの画像を配置 -->
        <img src="image/apple.jpg" class="apple" id="apple1" />
        <img src="image/apple.jpg" class="apple" id="apple2" />
        <img src="image/apple.jpg" class="apple" id="apple3" />
        <img src="image/apple.jpg" class="apple" id="apple4" />
        <img src="image/apple.jpg" class="apple" id="apple5" />
        <img src="image/apple.jpg" class="apple" id="apple6" />

        <!-- 必要に応じてリンゴを追加 -->
    </div>
    <p>収穫したリンゴの数: <span id="score">0</span></p>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20px;
        }

        #orchard {
            position: relative;
            width: 600px;
            height: 400px;
            margin: 0 auto;
            border: 2px solid #ccc;
            background-color: #f0f8ff;
            overflow: hidden;
        }

        .apple {
            position: absolute;
            width: 50px;
            height: 50px;
            cursor: pointer;
            transition: transform 0.2s;
        }
    </style>

    <script>
        // スコアの初期化
        let score = 0;
        const scoreSpan = document.getElementById('score');

        // リンゴの要素を取得
        const apples = [
            document.getElementById('apple1'),
            document.getElementById('apple2'),
            document.getElementById('apple3'),
            document.getElementById('apple4'),
            document.getElementById('apple5'),
            document.getElementById('apple6')
        ];


        // まず、リンゴの情報を管理するための配列を作成
        const appleDataList = apples.map(apple => {
            return {
                element: apple,
                currentX: 0,
                currentY: 0,
                targetX: 0,
                targetY: 0,
                speed: 0.02 // 速度係数（調整可能）
            };
        });

        // 初期位置と目標位置を設定
        appleDataList.forEach(data => {
            // 初期位置
            data.currentX = Math.random() * (document.getElementById('orchard').clientWidth - data.element.offsetWidth);
            data.currentY = Math.random() * (document.getElementById('orchard').clientHeight - data.element.offsetHeight);
            data.element.style.left = `${data.currentX}px`;
            data.element.style.top = `${data.currentY}px`;
            // 目標位置も設定
            setNewTarget(data);
        });

        // 目標位置を設定する関数
        function setNewTarget(data) {
            const orchard = document.getElementById('orchard');
            const maxX = orchard.clientWidth - data.element.offsetWidth;
            const maxY = orchard.clientHeight - data.element.offsetHeight;
            data.targetX = Math.random() * maxX;
            data.targetY = Math.random() * maxY;
        }

        // アニメーションループ
        function animate() {
            appleDataList.forEach(data => {
                // 目標に向かって少しずつ動かす
                const dx = data.targetX - data.currentX;
                const dy = data.targetY - data.currentY;

                // 位置を更新
                data.currentX += dx * data.speed;
                data.currentY += dy * data.speed;

                // 位置を反映
                data.element.style.left = `${data.currentX}px`;
                data.element.style.top = `${data.currentY}px`;

                // 目標に近づいたら新しい目標を設定
                if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
                    // 新しい目標位置を設定
                    data.targetX = Math.random() * (最大横幅);
                    data.targetY = Math.random() * (最大縦幅);
                }
            }
            )
        }



        // 位置をランダムに設定する関数
        function setRandomPosition(apple) {
            const orchard = document.getElementById('orchard');
            const maxX = orchard.clientWidth - apple.offsetWidth;
            const maxY = orchard.clientHeight - apple.offsetHeight;
            const randX = Math.random() * maxX;
            const randY = Math.random() * maxY;
            apple.style.left = `${randX}px`;
            apple.style.top = `${randY}px`;
        }

        // 初期位置を設定
        apples.forEach(apple => {
            setRandomPosition(apple);
            // クリックイベントを追加
            apple.addEventListener('click', () => {
                if (apple.dataset.harvested === 'true') {
                    return; // 既に収穫済みの場合は無視
                }
                apple.dataset.harvested = 'true'; // 収穫済みに設定
                apple.style.opacity = 0.5; // 見た目を半透明に
                score += 1; // スコアを増やす
                scoreSpan.textContent = score; // 表示更新
            });
        });

        // 1.5秒ごとにリンゴの位置を更新
        setInterval(() => {
            apples.forEach(apple => {
                setRandomPosition(apple);
                // 収穫済みの場合は再度収穫可能にする
                apple.dataset.harvested = 'false';
                apple.style.opacity = 1;
            });
        }, 1500);
    </script>
</body>

</html>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                      <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                      <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                      <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS App</h2>
                </div>
                <div>
                  <p>Reactとjavascriptで投稿機能付きのchatアプリ、仕様はReact,JavaSucript,html,css,frirebaseログイン・ログアウト認証
                    機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。
                  </p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>{/* md:w-1/3 p-4 */}
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          {/* left side  */}
          <div>
            <img src="./img/pc.jpg" alt="" className='rounded' />
          </div>
          {/* rigth side  */}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 md-10'>My Skills</h1>

            <div className='w-full'>
              <h2>HTML/css</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white style={{width:"85%}}'>85%</div>
              </div>

            </div>{/* lg:w-1/2 */}
            <h2>JavaScript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white style={{width:"75%}}'>75%</div>
            </div>{/* JavaScript */}

            <h2>React</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white style={{width:"60%}}'>60%</div>
            </div>{/* React */}
            <h2>Python</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white style={{width:"80%}}'>80%</div>
            </div>{/* Python */}
          </div>{/* w-full */}

        </div>


      </section>
    </>

  )
}

export default App
