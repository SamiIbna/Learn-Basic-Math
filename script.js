// Quiz Functionality
const quizForm = document.querySelector('.quiz-form');
if (quizForm) {
  quizForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Quiz answers
    const answers = {
      q1: 48, // 8 × 6
      q2: 12, // 45 ÷ 5 + 3
      q3: 50, // Area of rectangle (10 × 5)
      q4: 180, // Sum of triangle interior angles
      q5: 4, // Solve 2x + 3 = 11
      q6: 14, // y = 3x + 2 when x = 4
      q7: 8, // Mean of 4, 8, 12
      q8: 3 // Mode of {2, 3, 3, 5, 7}
    };

    let score = 0;
    for (const question in answers) {
      const userAnswer = parseFloat(quizForm[question].value);
      if (userAnswer === answers[question]) {
        score++;
      }
    }

    alert(`You scored ${score} out of ${Object.keys(answers).length}`);
  });
}

// Profile Form
const profileForm = document.querySelector('.profile-form');
if (profileForm) {
  profileForm.addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value);

    if (!email.includes('@')) {
      alert('Please enter a valid email.');
      event.preventDefault();
    }

    if (age < 5 || age > 100 || isNaN(age)) {
      alert('Age must be between 5 and 100.');
      event.preventDefault();
    }
  });
}

// Menu
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Image 
const geometryImage = document.querySelector('.content-image img');
if (geometryImage) {
  geometryImage.addEventListener('click', function () {
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.3s ease';
  });

  geometryImage.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });
}

// Submission Page 
const params = new URLSearchParams(window.location.search);
const type = params.get('type');
if (type) {
  const quizSubmission = document.getElementById('quiz-submission');
  const profileSubmission = document.getElementById('profile-submission');

  if (type === 'quiz' && quizSubmission) {
    quizSubmission.style.display = 'block';
  } else if (type === 'profile' && profileSubmission) {
    profileSubmission.style.display = 'block';
  }
}

