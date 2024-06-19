'use client'
import { useEffect, useState } from 'react';
import styles from '../assets/clock.module.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const clockEl = document.querySelector(`.${styles.clock}`);
    if (clockEl && clockEl.children.length < 72) {
      const numberPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      numberPositions.forEach((num) => {
        const number = document.createElement('div');
        number.className = styles.number;
        number.style.transform = `rotate(${30 * num}deg) translate(0, -130px) rotate(-${30 * num}deg)`;
        number.innerHTML = num;
        clockEl.appendChild(number);
      });
    }
  }, []);

  const h = (time.getHours() % 12)-3;
  const m = time.getMinutes()-16;
  const s = time.getSeconds();
  const date = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][time.getDay()];

  // Correct angle calculations
  const hDeg = (h * 30) + (m / 60) * 30;
  const mDeg = (m * 6) + (s / 60) * 6;
  const sDeg = s * 6;

  return (
    <div className={styles.clock}>
      <div className={styles.hourHand} style={{ transform: `rotate(${hDeg}deg)` }} />
      <div className={styles.minuteHand} style={{ transform: `rotate(${mDeg}deg)` }} />
      <div className={styles.secondHand} style={{ transform: `rotate(${sDeg}deg)` }} />
      <div className={styles.centerPin}></div>
      <div className={styles.date}>{`${date}/${month < 10 ? `0${month}` : month}/${year}`}</div>
      <div className={styles.day}>{day}</div>
    </div>
  );
};

export default Clock;
