import renderer from "react-test-renderer";
import TemplateCard from "../template-card/template-card.component";

test("template card matches snapshot", () => {
  const templateProps = {
    name: "Test template",
    category: ["Health"],
    created: "2020-11-04T16:26:44.666569",
    description: "Test description",
    link: "https://formpl.us",
  };
  const templateCard = renderer
    .create(<TemplateCard {...templateProps} />)
    .toJSON();
  expect(templateCard).toMatchSnapshot();
});
