# Portfolio Website - Đỗ Nho Tùng

Portfolio website chuyên nghiệp với các animation hiện đại và đầy đủ thông tin cá nhân.

## 🌟 Tính năng chính

### 📱 **Responsive Design**
- Tương thích hoàn hảo trên mọi thiết bị (Desktop, Tablet, Mobile)
- Mobile-first approach với breakpoints tối ưu

### 🎨 **Modern Animations**
- **Loading Screen**: Progress bar với animation mượt mà
- **Typing Effects**: Hiệu ứng gõ chữ cho tên và subtitle
- **Scroll Animations**: GSAP ScrollTrigger cho smooth reveal
- **Magnetic Buttons**: Hiệu ứng từ tính khi hover
- **Particles Background**: Particles.js cho background động
- **Purple Meteor Shower**: Hiệu ứng mưa sao băng tím khi bật Purple mode
- **Timeline Animations**: Timeline cho experience section
- **Counter Animations**: Đếm số cho statistics

### 🎯 **Sections Đầy Đủ**
1. **Hero Section**: Giới thiệu cá nhân với typing effects
2. **About Section**: Thông tin chi tiết và statistics
3. **Experience Section**: Timeline kinh nghiệm làm việc
4. **Skills Section**: Kỹ năng được chia theo categories
5. **Projects Section**: Portfolio dự án với filters
6. **Education Section**: Học vấn và chứng chỉ
7. **Contact Section**: Form liên hệ và thông tin

### ⚡ **Performance Optimizations**
- Lazy loading cho images
- Throttled scroll events
- Reduced motion support
- Mobile performance optimizations

### 🎨 **Theme System**
- Dark/Purple Meteor mode toggle
- Purple meteor shower effect
- CSS custom properties
- Smooth theme transitions

## 🛠️ Công nghệ sử dụng

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling với CSS Grid, Flexbox
- **JavaScript (ES6+)**: Modern JavaScript features
- **GSAP**: Professional animations
- **AOS**: Scroll animations
- **Typed.js**: Typing effects
- **Particles.js**: Background particles

### Libraries & Tools
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Intersection Observer**: Performance optimizations

## 📁 Cấu trúc dự án

```
My_Portfolio/
├── index.html              # Main HTML file
├── styles.css              # Main CSS file
├── script.js               # Main JavaScript file
├── README.md               # Documentation
├── cv/
│   └── DoNhoTung_CV.pdf    # CV file
└── img/
    └── me2.jpg             # Profile image
```

## 🚀 Cách sử dụng

### 1. Clone repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Mở file index.html
- Mở file `index.html` trong trình duyệt
- Hoặc sử dụng live server:
```bash
# Nếu có Python
python -m http.server 8000

# Nếu có Node.js
npx live-server
```

### 3. Tùy chỉnh nội dung
- Cập nhật thông tin cá nhân trong `index.html`
- Thay đổi styles trong `styles.css`
- Thêm animations trong `script.js`

## 🎨 Tùy chỉnh

### Thay đổi màu sắc
```css
:root {
    --accent-purple: #4b0082;
    --accent-purple-light: #800080;
    --accent-purple-bright: #a100a1;
}
```

### Thêm section mới
1. Thêm HTML structure trong `index.html`
2. Thêm CSS styles trong `styles.css`
3. Thêm animations trong `script.js`

### Tùy chỉnh animations
```javascript
// Thêm GSAP animation
gsap.fromTo('.your-element', {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
});
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ⚡ Performance

- **Lighthouse Score**: 90+ trên tất cả metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development

### Cấu trúc CSS
- CSS Custom Properties cho theming
- BEM methodology cho class naming
- Mobile-first responsive design
- Optimized animations

### JavaScript Architecture
- Modular functions
- Event delegation
- Performance optimizations
- Error handling

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Liên hệ

- **Email**: nhotungdo89@gmail.com
- **LinkedIn**: linkedin.com/in/đỗ-nho-tùng-06478b315
- **GitHub**: github.com/nhotungdo

## 🙏 Acknowledgments

- GSAP team cho animation library
- AOS team cho scroll animations
- Font Awesome cho icons
- Google Fonts cho typography

---

**Made with ❤️ by Đỗ Nho Tùng**
