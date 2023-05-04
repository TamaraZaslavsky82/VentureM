import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Accordion() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div class="accordion accordion-flush" id="accordionFlushExample" >
        <div class="accordion-item" >
          <h1 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{fontSize: '28px', color:'rgb(214, 137, 16)'}}
            >
              Financing
            </button>
          </h1>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Impact financing: By bridging the funding gap between the USA and
              LATAM we provide funding for Latin American entrepreneurs working
              on solutions to solve the world's most urgent problems.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo "
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{fontSize: '28px', color:'rgb(214, 137, 16)'}}
            >
              Support To Scale
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Providing strategic connections: Access to international markets
              and our deep network of experts from all major industries
              represented in Europe, the USA and Latin America.
              <br />
              <br /> Operational support: we work closely with founders and
              offer the ability to enhance your management skills through
              development opportunities mentorship and access to technologies.
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .accordion-header:not(.collapsed) {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
}

export default Accordion;
