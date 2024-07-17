import { CORE_CONCEPTS } from "../data";
import CoreComponent from "./CoreComponents/CoreComponents";
import Section from "./Section";
export default function CoreConcepts() {
  return (
    <Section titles="Core Concept" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptsItem) => (
          <CoreComponent key={conceptsItem.title} {...conceptsItem} />
        ))}
        {/*<CoreComponent
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreComponent {...CORE_CONCEPTS[1]} />
          <CoreComponent {...CORE_CONCEPTS[2]} />
  <CoreComponent {...CORE_CONCEPTS[3]} />*/}
      </ul>
    </Section>
  );
}
