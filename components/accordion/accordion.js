import React from "react";

import { Accordion, AccordionSection } from "@ftdr/blueprint-components-react";

function FdtrAccordion() {
    return (
        <Accordion mode="multiple" defaultActiveIndex={[1]}>
    <AccordionSection label="Section 1">ABC</AccordionSection>
    <AccordionSection label="Section 2">XYZ</AccordionSection>
    <AccordionSection disabled label="Section 3">
      Expanded content
    </AccordionSection>
  </Accordion>
    )
}
  
export default FdtrAccordion