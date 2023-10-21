import ConceptsLi from "./ConceptsLi";

function ConceptsUl(props) {
  console.log(props);
  return (
    <ul id="concepts">
      {props.concepts.map((concept) => {
        return (
          <ConceptsLi
            title={concept.title}
            image={concept.image}
            description={concept.description}
          />
        );
      })}
    </ul>
  );
}

export default ConceptsUl;
