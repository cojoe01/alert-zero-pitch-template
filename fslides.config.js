module.exports = {
  name: 'alert-zero-pitch-template',
  title: 'Elastic Security',
  repo: 'cojoe01/alert-zero-pitch-template',   // powers slide comments (GitHub issues)
  gateway: 'https://api.fslides.dev',    // sign-in broker for commenting on the published deck
  slidesDir: 'slides',
  style: 'elastic-web',

  // Slide filenames in order, relative to the slides/ directory
  slides: [
    'cover.html',
    'team.html',
    'attacker-side.html',
    'analysts-day.html',
    'one-platform.html',
    'in-numbers.html',
    'siem-matters.html',
    'never-waited.html',
    'block-hunt.html',
    'introducing-alertzero.html',
    'alertzero-architecture.html',
    'what-is-a-watch.html',
    'watch-flow.html',
    'three-levels.html',
    'demo-running.html',
    'key-takeaways.html',
  ],

  // Human-readable labels for the overview panel (must match slides array length)
  labels: [
    'Cover',
    'Team',
    'The attacker side',
    'The analyst\'s day',
    'One platform',
    'In numbers',
    'The SIEM matters',
    'It never waited',
    'Block and hunt',
    'Introducing AlertZero',
    'AlertZero architecture',
    'What is a Watch',
    'Watches working together',
    'Three levels',
    'AlertZero, running',
    'Key takeaways',
  ],

  // Optional: per-slide PDF overrides
  // pdfOverrides: {
  //   'my-animated-slide.html': {
  //     wait: 5000,   // extra ms to wait before capturing
  //     extra: `document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));`
  //   }
  // },
  disabled: [
    'block-hunt.html',
    'key-takeaways.html',
  ],
};
