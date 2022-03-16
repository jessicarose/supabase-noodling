var SUPABASE_URL = 'https://zraazthnomhtiwwxeagi.supabase.co'
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYWF6dGhub21odGl3d3hlYWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc0MjY2MDYsImV4cCI6MTk2MzAwMjYwNn0.dS8sUJP_a9zNzCzTFKy1YJ1W5tYbvudBoWWu5eW3J-M'

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event){
    var signUpForm = document.querySelector('#sign-up')
    signUpForm.onsubmit = signUpSubmitted.bind(signUpForm)

    var logInForm = document.querySelector('#log-in')
    logInForm.onsubmit = logInSubmitted.bind(logInForm)

    var userDetailsButton = document.querySelector('#user-button')
    userDetailsButton.onclick = fetchUserDetails.bind(userDetailsButton)
  
    var logoutButton = document.querySelector('#logout-button')
    logoutButton.onclick = logoutSubmitted.bind(logoutButton)
})

const signUpSubmitted = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value

supabase.auth
    .signUp({email, password})
    .then((response) => {
        response.error ? alert(response.error.message) : setToken(response)
    })
    .catch((err) => {
        alert(err) 
    })
}

const logInSubmitted = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value

    supabase.auth
    .signIn({email, password})
    .then((response) => {
        response.error ? alert(response.error.message) : setToken(response)
    })
    .catch((err) => {
        alert(err.response.text) 
    })
}

const fetchUserDetails = () => {
    alert(JSON.stringify(supabase.auth.user()))
}

const logoutSubmitted = (event) => {
    event.preventDefault()

    supabase.auth
    .signOut()
    .then((_response) =>{
        document.querySelector('#access-token').value = ""
        document.querySelector('#refresh-token').value = ""
    })
}

function setToken(response){
    if (response.user.confirmation_sent_at && !response?.session.access_token){
        alert('Confirmation email sent')
    }
    else {
        document.querySelector('#access-token').value = response.session.access_token
        document.querySelector('#refresh-token').value = response.session.refresh_token
        alert('Logged in as ' + response.user.email)
    }
}