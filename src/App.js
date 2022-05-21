import styled, { css } from "styled-components";
import meta from "./assets/meta.svg";
import calendar from "./assets/calendar.svg";
import chevron from "./assets/rightChevron.svg";
import orangeStar from "./assets/orangeStar.svg";
import notice from "./assets/notice.png";
import coinPot from "./assets/coinPot.svg";
// import left1 from "./assets/left1.svg";
// import left2 from "./assets/left2.svg";
// import left3 from "./assets/left3.svg";
// import left4 from "./assets/left4.svg";
// import left5 from "./assets/left5.svg";
import revet from "./assets/revet.svg";

import coinLeft from "./assets/coinLeft.svg";
import coinRight from "./assets/coinRight.svg";

import { useInView } from "react-intersection-observer";
function App() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <main>
      <ContainerStyle>
        <Header>
          <div className="img_box">
            <img src={meta} alt="meta_img" />
          </div>
          <div className="calendar_box">
            <div className="img_box">
              <img src={calendar} alt="calendar_img" />
            </div>

            <div className="calendar_content">
              <p>Day 1</p>
              <p className="last_of">of 5</p>
            </div>
          </div>
        </Header>

        <CTAsection className="cta_cta">
          <h1 ref={ref} className={`${inView ? "animate-up" : ""} cta_title`}>
            <span>Unlock to </span>
            <span className="second_span">Power your dreams!</span>{" "}
          </h1>

          <img src={orangeStar} alt="orange_img" className="orange_img" />

          <p ref={ref} className={`${inView ? "animate-up" : ""} cta_content`}>
            <span className="first_span"> Stand a chance to win </span>{" "}
            <span className="money">N3,000,000</span> everyday for the next 5 days
          </p>

          <Card ref={ref} className={`${inView ? "animate-up" : ""}`}>
            <p className="how_title">🚀  How To Play</p>

            <ul>
              <li>Guess the right combination of numbers </li>

              <li>
                Win <span>N3,000,000</span> instantly
              </li>
            </ul>

            <p className="see">
              {" "}
              Sounds unbelievable? Well, guess right & see for yourself!
            </p>

            <div className="notice">
              <ul id="notice_id">
                <li>
                  Think well before you guess. You have only 2 attempts per day
                  and even after you wi, you can come back the next day to try
                  for another jackpot!
                </li>
              </ul>
            </div>
          </Card>

          <a
            href="/"
            ref={ref}
            className={`${inView ? "animate-up" : ""} play_btn`}
          >
            Play the Game
            <img src={chevron} alt="chevron" className="chevron_img" />
          </a>
        </CTAsection>
      </ContainerStyle>

      <div className="light_box rotate">
        <div className="light light1">
          <img src={revet} alt="left" className=" left" />
        </div>

        <div className="light light2">
          <img src={revet} alt="left" className=" left" />
        </div>
      </div>

      <div className="coin">
        <img
          src={coinLeft}
          alt="coinLeft"
          className="single_left coinPot_img bounce"
        />
        <img
          src={coinRight}
          alt="coinRight"
          className="single_right coinPot_img bounce"
        />
        <img src={orangeStar} alt="orange_img" className="orange_img" />
        <img src={coinPot} alt="coinPot" className="coinPot_img" />
      </div>
    </main>
  );
}

const flexBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  padding: 2rem 0;
  ${flexBox}
  .img_box {
    width: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .calendar_box {
    ${flexBox}

    .calendar_content {
      margin-left: 1rem;
      color: #fff;
      font-size: 0.7rem;
      .last_of {
        margin-top: 0.2rem;
        opacity: 0.6;
      }
    }
  }
`;

const CTAsection = styled.div`
  ${flexBox}
  position:relative;
  flex-direction: column;
  .cta_title {
    font-size: 3rem;
    text-align: center;
    span {
      display: block;
      font-weight: 300;
    }

    .second_span {
      margin-top: -1rem;
      font-weight: 700;
    }
  }

  .orange_img {
    position: absolute;
    top: 6rem;
    left: 60%;
  }

  .cta_content {
    text-align: center;
    .first_span {
      display: block;
    }

    .money {
      font-weight: 700;
    }
  }

  .play_btn {
    padding: 0.8rem 3rem;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background: #ecab03;
    border-radius: 4px;
    position: relative;
    z-index: 9;

    .chevron_img {
      position: absolute;
      top: 35%;
      right: 1rem;
    }
  }

  @media (max-width: 768px) {
    .cta_title {
      font-size: 2.3rem;
      span {
        display: inline;
        font-weight: 300;
      }
    }
  }
`;

const Card = styled.div`
  position: relative;
  z-index: 22;
  padding: 2rem;
  margin: 0.7rem 0;
  font-size: 1rem;

  max-width: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.39) -213.5%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0px -1px 11px rgba(255, 255, 255, 0.17),
    inset 0px 2px 0px rgba(255, 255, 255, 0.24);
  border-radius: 8px;

  .how_title {
    text-align: center;
    font-weight: 600;
    line-height: 1.5rem;
    margin-bottom: 0.7rem;
  }

  ul,
  .see {
    font-size: 0.8rem;
    font-weight: 300;
  }

  ul {
    list-style-type: numbers;
    list-style-position: inside;
    span {
      font-weight: 700;
    }
  }

  .see {
    margin: 0.7rem 0;
  }

  .notice {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 1rem 1.5rem;
    font-size: 0.8rem;

    ul {
      position: relative;
      list-style-type: none;
      padding-left: 6px;

      li::before {
        position: absolute;
        left: -1.1rem;
        content: url(${notice});
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const ContainerStyle = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export default App;
