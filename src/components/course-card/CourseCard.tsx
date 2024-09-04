import coursePreview from "../../assets/CoursePreview.png";
import timer from "../../assets/timer.svg";
import star from "../../assets/star.svg";
import "./CourseCard.scss";
import { Button } from "../../shared/button/Button";

export const CourseCard = () => {
  return (
    <div className="course-card">
      <img src={coursePreview} alt="Обложка курса" />
      <div className="course-card__content">
        <div>
          <h3>React + Next.js - с нуля</h3>
          <p className="course-card__author">Антон Ларичев</p>
        </div>
        <div className="course-card__timing">
          <img src={timer} alt={"Время"} />
          <p>18 часов лекций</p>
        </div>
        <div className="course-card__rating">
          <Button title="4.9" icon={star} size="xs" />
          <Button title="Frontend" size="xs" />
        </div>
      </div>
      <div className="course-card__footer">
        <p className="course-card__price">от 1 890 ₽</p>
        <Button title="Подробнее" status />
      </div>
    </div>
  );
};
