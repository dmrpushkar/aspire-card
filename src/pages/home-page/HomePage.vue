<template>
  <div class="home-page">
    <div class="content-wrapper">
      <h1>Welcome to Aspire Card Demo</h1>

      <section class="project-info">
        <h2>Project Status</h2>
        <p>This demo currently features a fully functional Cards Section, which includes:</p>
        <ul>
          <li>Interactive card management interface</li>
          <li>Card details with masking functionality</li>
          <li>Card actions (freeze, add new card)</li>
          <li>Transaction history</li>
          <li>Responsive design for both desktop and mobile</li>
        </ul>
        <div class="cta-button">
          <router-link to="/cards" class="primary-button">View Cards Section</router-link>
        </div>
      </section>

      <section class="about-dev">
        <h2>About the Developer</h2>
        <p>Hi! I'm currently a React developer with day-to-day experience in building modern web applications. While I have previous experience with Vue.js, it's been over 3 years since I last worked with it professionally.</p>
        <p>This project was an exciting opportunity to revisit Vue.js and demonstrate my ability to:</p>
        <ul>
          <li>Quickly adapt to different frameworks and technologies</li>
          <li>Implement complex UI components and interactions</li>
          <li>Write clean, maintainable code</li>
          <li>Create responsive and user-friendly interfaces</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  padding: 32px;

  @media (max-width: $mobile-breakpoint) {
    padding: 16px;
  }
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: $mobile-breakpoint) {
    padding: 24px;
  }
}

h1 {
  color: var(--dark-blue-color);
  margin-bottom: 32px;
  font-size: 32px;

  @media (max-width: $mobile-breakpoint) {
    font-size: 24px;
    margin-bottom: 24px;
  }
}

h2 {
  color: var(--dark-blue-color);
  margin: 24px 0 16px;
  font-size: 24px;

  @media (max-width: $mobile-breakpoint) {
    font-size: 20px;
  }
}

section {
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 16px 0;

  li {
    margin: 8px 0;
    padding-left: 24px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--primary-color);
    }
  }
}

.cta-button {
  margin-top: 24px;
  text-align: center;
}

.primary-button {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: darken(#01D167, 10%);
  }
}

p {
  line-height: 1.6;
  color: var(--dark-blue-color);
  margin: 16px 0;
}
</style>
