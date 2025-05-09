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
                  <p>Reactとjavascriptで投稿機能付きのchatアプリ、仕様はReact,JavaSucript,html,css,frirebaseログイン・ログアウト認証
                    機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>{/* md:w-1/3 p-4 */}
            {/* カードのdivタグ */}
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
import { useState } from 'react';
import './App.css';

function App() {


  const [showResult, setShowResult] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [next, setNext] = useState(false);

  const [answers, setAnswers] = useState([]);

  const [score, setScore] = useState(0);

  const [feedback, setFeedback] = useState(null);

  const [showScore, setShowScore] = useState(false); // score画面の管理trueに変わるとscoreページを表示

  // 追加：スタート画面の表示管理
  const [showStartScreen, setShowStartScreen] = useState(true);

  // スタートボタンを押したときの処理
  const startQuiz = () => {
    setShowStartScreen(false);
  };

  const handleAnswer = (answer) => {
    // console.log(answer);

    const newAnswer = {
      question: quizData[currentQuestion].question,
      answer: answer,
      correct: answer === quizData[currentQuestion].correct,
    };

    if (newAnswer.correct) {
      setScore((prevScore) => prevScore + 1);
      setFeedback('〇');
    } else {
      setFeedback('×');
    }
    setAnswers([...answers, newAnswer]);

    // console.log(answers);

    setNext(true);

  }

  const goToNextQuestion = () => {

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setNext(false);
      setFeedback('');
    } else {
      // すべての問題が終了した場合の処理
      setShowResult(true);
    }
  };

  return (
    <div className='quiz-container'>
      {/* {showStartScreen ? (
        <div className='start-screen'>
          <h1>クイズに挑戦しよう！</h1>
          <button onClick={startQuiz}>スタート</button>
        </div> */}


      {showScore ? (
        <div className='score-section'>
          <h1>スコア</h1>
          <h2>{score}/{quizData.length}</h2>
          <table className='answer-table'>
            <thead>
              <tr>
                <td>質問</td> <td>あなたの回答</td> <td>合否</td>
              </tr>
            </thead>
            <tbody>
              {answers.map((item) => (
                <tr className={item.correct ? 'correct' : 'wrong'}>
                  <td>{item.question}</td>
                  <td>{item.answer}</td>
                  <td>{item.correct ? '〇' : '×'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='question-section'>
          <h1>問題{currentQuestion + 1}/{quizData.length}</h1>
          <h2>{quizData[currentQuestion].question}</h2>

          {next ? (
            <div className='feedback-section'>
              <h2 className='large-feedback'>{feedback}</h2>  {/* 合否を表示 */}
              <p>正解は</p>
              <p>{quizData[currentQuestion].correct}</p>
              <button onClick={goToNextQuestion}>次の問題へ</button>
            </div>
          ) : (
            <div className='answer-section'>
              {quizData[currentQuestion].options.map((item, index) => (
                <button key={index} onClick={() => handleAnswer(item)} className={`quiz-option-button option-${index}`}>{item}</button>
              ))}
            </div>
          )}


        </div>
      )}


    </div>


  );
}

export default App;

const quizData = [
  {
    question: "太陽系で最も大きい惑星はどれですか？",
    options: ["地球", "火星", "金星", "木星"],
    correct: "木星",
  },
  {
    question: "次のうち、哺乳類絵はない動物はどれですか？",
    options: ["カンガルー", "カンガルー", "ペンギン", "カバ"],
    correct: "ペンギン",
  },
  {
    question: "モナ・リザを描いた画家は誰ですか？",
    options: ["レオナルド・ダ・ヴィンンチ",
      "ミケランジェロ",
      "フィンセントゴッホ",
      "モネ",
    ],
    correct: "レオナルド・ダ・ヴィンンチ",
  },
  {
    question: "以下の食材の中で、一般的には果物として認識されていないものはどれですか？",
    options: ["トマト", "りんご", "ぶどう", "ブロッコリー", "バナナ"],
    correct: "ブロッコリー",
  },
];
              
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
