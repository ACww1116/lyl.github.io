// 注册处理
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    alert('registered successfully Please check email verification');
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert(`login has failed: ${error.message}`);
  }
});

// 登录处理（login.html）
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert(`Login failed: ${error.message}`);
  }
});

// 忘记密码（forgot-password.html）
document.getElementById('resetForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;

  try {
    await firebase.auth().sendPasswordResetEmail(email);
    alert('Password reset email has been sent, please check your email');
  } catch (error) {
    alert(`fail in send: ${error.message}`);
  }
});