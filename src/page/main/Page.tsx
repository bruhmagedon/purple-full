import { CourseList } from "./course/CourseList";
import { Reviews } from "./reviews/Reviews";

const Page = () => {
  return (
    <main>
      <CourseList />
      <Reviews />
    </main>
  );
};

export default Page;
