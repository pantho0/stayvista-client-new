import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div>
      {categories.map((category) => (
        <CategoryBox
          key={category.label}
          icon={category.icon}
          label={category.label}
        />
      ))}
      </div>
    </Container>
  );
};

export default Categories;
