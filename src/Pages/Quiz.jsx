import Header from "../Components/Quiz/Header";
import Main from "../Components/Quiz/Main";
import { useReducer, useEffect } from "react";
import Loading from "../Components/Quiz/Loader";
import Error from "../Components/Quiz/Error";
import StartScreen from "../Components/Quiz/StartScreen";
import Questions from "../Components/Quiz/Questions";
import NextButton from "../Components/Quiz/NextButton";
import Progress from "../Components/Quiz/Progress";
// import Reset from "../Components/Quiz/Reset";
import FinishScreen from "../Components/Quiz/FinishScreen";
import Footer from "../Components/Quiz/Footer";
import Timer from "../Components/Quiz/Timer";
import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";

const SECS_PER_QUESTION = 30;

function initialState() {
  return {
    questions: [
      {
        question: "सन् 2023 को Asian Games कहाँ भएको थियो ?",
        options: [
          "Hangzhou, China",
          "Yokohama, Japan",
          "Bangkok, Thailand",
          "Beijing, China",
        ],
        correctOption: 0,
        points: 10,
      },
      {
        question: "चन्द्रमामा सफल अवतरण गर्ने भारतीय यानको नाम के हो ?",
        options: [
          "चन्द्रयान ३",
          "मेरा भारत यान",
          "श्री कृष्ण यान",
          "मिसन चन्द्र",
        ],
        correctOption: 0,
        points: 10,
      },

      {
        question: "सबै भन्दा उँचाईमा रहेको जिल्ला सदरमुकाम कुन हो ?",
        options: ["Pokhara", "Lukla", "Phidim", "Simikot"],
        correctOption: 3,
        points: 10,
      },
      {
        question: "क्षेत्रफलको आधारमा नेपालको सबै भन्दा ठुलो जिल्ला कुन हो ?",
        options: ["ललितपुर", "डोल्पा", "चितवन", "रामेछाप"],
        correctOption: 1,
        points: 10,
      },
      {
        question:
          "नेपाली भाषामा नेपालबाटै प्रकाशित पहिलो साहित्यक पत्रिका कुन हो ?",
        options: ["कृति", "सुधा सागर", "जानकी", "साहित्य रस"],
        correctOption: 1,
        points: 30,
      },
      {
        question: "सहिद दशरथ चन्दलाई कहिले फाँसी / मृत्युदण्ड दिएको थियो ?",
        options: [
          "B.S. 1993 Bhadra 5",
          "B.S. 1997 Magh 11",
          "B.S. 1991 Magh 18",
          "B.S. 1999 Jestha 19",
        ],
        correctOption: 1,
        points: 20,
      },
      {
        question: "प्रसिद्ध हलेसी महादेवको मन्दिर कुन जिल्लामा रहेको छ ?",
        options: ["Udaypur", "Khotang", "Bhojpur", "Jumla"],
        correctOption: 1,
        points: 20,
      },
      {
        question: "Mt. Everest लाई सगरमाथा नामकरण गर्ने को हुन् ??",
        options: [
          "Laxmi Prasad Devkota",
          "Baburam Acharya",
          "King Mahendra",
          "Bir Sumsher",
        ],
        correctOption: 1,
        points: 30,
      },
      {
        question: "पाँचौ वेद भनेर के लाई बुझिन्छ ?",
        options: ["ब्रम्हा", "चाणक्य", "इतिहास", "गुरु"],
        correctOption: 2,
        points: 30,
      },
      {
        question: "दरबार हाई-स्कूल कसले निर्माण गर्न लगाएका हुन् ?",
        options: ["बिर सम्सेर", "भीमसेन थापा", "राजा राजेन्द्र", "जंग बहादुर"],
        correctOption: 3,
        points: 10,
      },
      {
        question: "“कवि सिरोमणि” भनेर कसलाई सम्बोधन गरिन्छ ?",
        options: [
          "Lekhnath Poudel",
          "Laxmi Prasad Devkota",
          "Bhupi Serchan",
          "Bhanu Bhakta Aacharya",
        ],
        correctOption: 0,
        points: 30,
      },
      {
        question:
          "चीनलाई सार्क राष्ट्रमा आबद्ध गर्न प्रस्ताब गर्ने राष्ट्र कुन हो ?",
        options: ["Nepal", "Pakistan", "Maldives", "Sri Lanka"],
        correctOption: 0,
        points: 30,
      },
      {
        question: "नेपालमा सबै भन्दा पहिले स्थापना भएको उद्योग कुन हो ?",
        options: [
          "गोरखकाली टायर",
          "जनकपुर चुरोट कारखाना",
          "बिराटनगर जुट मिल",
          "भृकुटी कागज कारखाना",
        ],
        correctOption: 2,
        points: 20,
      },
      {
        question: "नेपालको पहिलो सिंचाई आयोजना कुन हो ?",
        options: ["त्रि-चन्द्र नहर", "चन्द्र नहर", "जुद्ध नहर", "पृथ्वी नहर"],
        correctOption: 1,
        points: 20,
      },
      {
        question: "सबै भन्दा धेरै हतियारको ब्यापार गर्ने देश कुन हो ?",
        options: ["America", "France", "Germany", "Russia"],
        correctOption: 0,
        points: 20,
      },
    ],
    status: "loading",
    answer: null,
    points: 0,
    secondsRemaining: null,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "loaded":
      return {
        ...state,
        status: "ready",
      };

    case "start":
      return {
        ...state,
        status: "active",
        index: 0,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer": {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + action.points
            : state.points,

        // points:
        //   action.payload === question.correctOption
        //     ? state.points + question.points
        //     : state.points,
      };
    }

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "reset":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: 10,
      };

    case "completed":
      return { ...state, status: "finished" };

    case "restart":
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: "reset",
        secondsRemaining: 10,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Unknown Action");
  }
}

export default function Quiz() {
  const [
    { questions, status, index, answer, points, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState());

  // useEffect(function () {
  //   fetch("http://localhost:8000/questions")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //     .catch((err) => dispatch({ type: "dataFailed" }));
  // }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: "loaded" });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const numQuestions = questions.length;
  const maxPossibelPoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  return (
    <div className={styles.quizBody}>
      <Link to="/">
        <button className={styles.homepage}>back to home</button>
      </Link>
      <div className={styles.quiz}>
        <Header />
        <Main>
          {status === "loading" && <Loading />}
          {/*{status === "error" && <Error />} */}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                maxPossibelPoints={maxPossibelPoints}
                answer={answer}
                dispatch={dispatch}
              />

              <Questions
                questions={questions[index]}
                dispatch={dispatch}
                answer={answer}
                points={points}
                index={index}
                numQuestion={numQuestions}
              />

              <Footer>
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  index={index}
                  numQuestions={numQuestions}
                />
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
                {/* <Reset dispatch={dispatch} /> */}
              </Footer>
            </>
          )}
          {status === "finished" && (
            <FinishScreen
              points={points}
              maxPossiblePoints={maxPossibelPoints}
              dispatch={dispatch}
            />
          )}

          {status === "reset" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
        </Main>
      </div>
    </div>
  );
}
