window.onload = function() {
    alert("Welcome to my Portfolio! \n\nI am Mubashir Jilani.");
  };

  document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                const navMenu = document.querySelector("nav ul");
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                }
            }
        });
    });

    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        observer.observe(section);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            
            // Change menu icon
            if (navMenu.classList.contains("active")) {
                menuToggle.textContent = "[X]";
            } else {
                menuToggle.textContent = "[≡]";
            }
        });
    }

    // Typing animation with hacker-style words
    const typedText = document.querySelector(".typing-text");
    if (typedText) {
        const words = ["Web Developer", "Code Artist", "UI Specialist"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typedText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before typing next word
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing animation after a brief delay
        setTimeout(type, 1000);
    }

    // Add terminal-like cursor to all prompts
    const prompts = document.querySelectorAll('.prompt');
    prompts.forEach(prompt => {
        prompt.innerHTML = '> <span class="cursor">_</span>';
    });
    
    // Cursor blink animation
    setInterval(() => {
        const cursors = document.querySelectorAll('.cursor');
        cursors.forEach(cursor => {
            cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
        });
    }, 500);
});
// Profile image glitch effect
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
    profilePic.addEventListener('mouseenter', () => {
        profilePic.querySelector('.glitch-effect').style.animation = 'glitch-anim 0.5s infinite linear alternate-reverse';
    });
    
    profilePic.addEventListener('mouseleave', () => {
        profilePic.querySelector('.glitch-effect').style.animation = 'glitch-anim 5s infinite linear alternate-reverse';
    });
}
