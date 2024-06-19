/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"], // Bạn có thể thay "*" bằng các đường dẫn cụ thể nếu cần
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}
