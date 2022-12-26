function AdminPanel() {
  return (
    <h2>AdminPanel</h2>
  )
}

function LoginForm() {
  return (
    <h2>LoginForm</h2>
  )
}

// Conditional rendering
export default function Conditional() {
  let content;
  let isLoggedIn = true
  if(isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />
  }

  return (
    <div>
      {content}
      {/* {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )} */}
    </div>
  )
}