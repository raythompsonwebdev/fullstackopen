import Part from "./Part.js";

const Content = props => {
  return (
    <>
      <Part part={props.parts[0].name} />
      <Part part={props.parts[1].name} />
      <Part part={props.parts[2].name} />
    </>
  );
};

export default Content;
