import '@testing-library/jest-dom';

// jsdom doesn't implement IntersectionObserver, which framer-motion's
// whileInView needs. A no-op stub is enough for render tests.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;
