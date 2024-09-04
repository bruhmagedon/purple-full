import "./reviews.scss";
import Platform1 from "@/assets/Platform1.svg";
import Platform2 from "@/assets/Platform2.svg";
import Platform3 from "@/assets/Platform3.svg";
import star from "@/assets/star.svg";

export const Reviews = () => {
  return (
    <section className="review">
      <div className="review__container">
        <div className="review__title">
          <p>О школе</p>
          <h2>Нам доверяют</h2>
        </div>
        <p className="review__text">
          Основатель школы и автор Антон Ларичев занимается разработкой уже
          более 13 лет и прошёл путь от разработчика до CTO. В курсах даются
          актуальные материалы без воды с опытом реальных проектов и
          практическим закреплением материала.
        </p>
        <div className="review__stats">
          <div className="review__stat">
            <h3>15 000</h3>
            <p>учеников по всему миру</p>
          </div>
          <div className="review__stat">
            <h3>30 дней</h3>
            <p>гарантия возврата денег</p>
          </div>
          <div className="review__stat">
            <h3>90%</h3>
            <p>студентов рекомендуют курсы</p>
          </div>
        </div>
        <h3 className="review__platforms-title">
          Рейтинги на независимых платформах
        </h3>
        <div className="review__platforms">
          <div className="review__platforms-item">
            <h2>4.8</h2>
            <img src={Platform1} alt="КурсесТоп" />
          </div>
          <div className="review__platforms-item">
            <h2>4.8</h2>
            <img src={Platform2} alt="Stepic" />
          </div>
          <div className="review__platforms-item">
            <h2>4.7</h2>
            <img src={Platform3} alt="Udemy" />
          </div>
        </div>
      </div>
    </section>
  );
};
