const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
img1.addEventListener('mouseover', function() {
    img1.style.display = 'none';
    img2.style.display = 'block';
});
img1.addEventListener('mouseout', function() {
    img1.style.display = 'block';
    img2.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const typewriterTexts = ["Jherf T. Jagonio", "BSCS-2A"];
    const typewriterElement = document.querySelector('.typewriter');
    let textIndex = 0; 
    let charIndex = 0; 
    let typingSpeed = 500; 
    let pauseDuration = 1000; 

    function type() {
        if (charIndex < typewriterTexts[textIndex].length) {
            typewriterElement.textContent += typewriterTexts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseDuration);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = typewriterTexts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, typingSpeed);
        } else {
            textIndex = (textIndex + 1) % typewriterTexts.length;
            setTimeout(type, pauseDuration);
        }
    }

    type();
});

