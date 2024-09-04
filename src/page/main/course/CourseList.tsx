import { CourseCard } from "../../../components/course-card/CourseCard";
import { Button } from "../../../shared/button/Button";
import "./course.scss";

export const CourseList = () => {
  return (
    <section className="course">
      <div className="course__title">
        <p>Выбрать курс</p>
        <h2>Каталог курсов</h2>
      </div>
      <div className="course__categories">
        <Button size="s" title="Все" status />
        <Button size="s" title="Frontend" />
        <Button size="s" title="Backend" />
        <Button size="s" title="DevOps" />
        <Button size="s" title="Soft Skills" />
      </div>
      <div className="course__courses-row">
        <div className="course__courses-col">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div className="course__courses-col">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </section>
  );
};
