<template>
  <div class="container">
    <headerNav></headerNav>
    <div class="page__intro">
      <h1>Our Process</h1>
      <p>Our process has four steps, and the length and complexity of each depend on you and your project.</p>
    </div>
    <div class="page__content process__pad page__content__border--thick page__content__border--left">
      <div class="process__step">
        <div class="process__icon">1</div>
        Introduction
      </div>
      <p class="process__content--padded">Our process starts where you are. We’re a full service firm, and can jump into your project at any stage. So, our first step is to find out <a href="#">where you are</a>. Next, we’ll pick your project up at whatever step you’re on and move it forward.</p>
    </div>

    <div class="page__content process__pad process__pad--right page__content__border--thick page__content__border--right">
      <div class="process__step">
        <div class="process__icon">2</div>
        Design
      </div>
      <p class="process__content">
        Our design process has several stages: Define, Develop, Engineer, Execute and Evaluate. We'll build a Proof of Concept (P.o.C.) Which may be a form prototype, without electronics, or an electronic prototype that may not resemble the final product in form. The P.o.C.'s function is to validate the concept, not be a final production sample. from here, we'll move to the Engineering and then the Design verification and testing.
      </p>
      <p class="process__content">
        Define: In the Define stage, we’ll develop the team (ours and yours), assign roles, and identify stakeholders. That group then identifies the goals, inputs, objectives, scope and success criteria for your projects. We’ll wrap up this stage when resources have been committed and a design schedule has been agreed to.
      </p>
      <p class="process__content">
        Develop: With the project fully defined, we’ll move into development. We’ll develop a list of minimum necessary functionality (keeping the POC scope in mind), and develop use cases for those functions. We’ll work with stakeholders to prioritize use cases, and keep each capability to the scope agreed on in the design phase.
      </p>
      <p class="process__content">
        Engineer: From the use cases, we’ll move into configuration and solutioning. We’ll build and test infrastructure and software, and based on the use cases, create the first P.o.C. prototype.
      </p>
      <p class="process__content">
        Execute: With a prototype to work on, we’ll create test designs for each use case, including negative test scenarios.
      </p>
      <p class="process__content">
        Evaluate: Next we’ll review the results from the POC with all stakeholders. We’ll develop a findings summary and show testing outcomes and discuss any testing failures. From here, we’ll decide whether to rewind and iterate on the Design or to move forward with developing a full execution plan.
      </p>
      <p class="process__content">
        Engineering Verification and Test: We will begin selecting and building the electronic functionality and go through an iterative build / test / rebuild process until the desired functionality is attained. During this phase we will also develop automated test fixtures and processes that will continue to be iterated throughout the lifecycle of the product. This is considerably earlier than most companies and can reduce the likelihood of delays later in the process.
      </p>
      <p class="process__content">
        Design Verification and Test: Similar to the Engineering Verification and test, the product form will go through the same build / test / rebuild process until the product form passes all tests and is approved by both design.parts and the client. Final final choices will be made for the industrial design and present color/material/finish (CMF) options.
      </p>
    </div>

    <div class="page__content process__pad page__content__border--thick page__content__border--left">
      <div class="process__step">
        <div class="process__icon">3</div>
        Manufacturing
      </div>
      <p class="process__content">
        The manufacturing process has three phases: Verification tests, Mass Production and Maintenance. Our manufacturing process services include part sourcing, design, assembly, and testing. We can assemble any number of units from 10-10,000+.
      </p>
      <p class="process__content">
        Process Verification and Test: We will build ten process samples with both form and function fully realized. These will be tested with the automated test fixtures and manually tested. Once both design.parts and the client approve the process samples, mass production can start in less two weeks, and often can start immediately.
      </p>
      <p class="process__content">
        Mass Production: Once the product has passed all testing, industrial design decisions have been made, and the final specifications are agreed to, we’ll move the product into mass production. Here we will use our expertise to source, assemble and test your parts. This phase will continue to use the test fixtures and processes that were developed previously.
      </p>
      <p class="process__content">
        Maintenance: Software updates will be applied as they are released, both to products that are in the production pipeline and those already in the hands of users. We can deliver continuous QA and development/updates support including: service and support center management, software updates, and community management.
      </p>
    </div>

    <div class="page__content process__pad process__pad--right page__content__border--right">
      <div class="process__step">
        <div class="process__icon">4</div>
        End of Life
      </div>
      <p class="process__content--padded">
        Finally, we can help to design and deliver warranty and refurbishing services.
      </p>
    </div>
  </div>
</template>

<script>
import headerNav from './headerNav'
export default {
  name: 'process',
  components: {
    headerNav: headerNav
  }
}
</script>

<style lang="scss">
@import '../styles/partials';

.process {
  &__step {
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 1.6em;
    font-weight: 600;
    font-family: Dosis;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background: $lite-blue;
  }

  &__content {
    margin-left: 20px;

    &--padded {
      margin-left: 20px;
      width: 50%;
    }
  }

  &__pad {
    padding: 18vh 0;
    &--right {
      padding-right: 20px;
    }
  }
}
</style>
