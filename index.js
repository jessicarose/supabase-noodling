var SUPABASE_URL = 'https://zraazthnomhtiwwxeagi.supabase.co'
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYWF6dGhub21odGl3d3hlYWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc0MjY2MDYsImV4cCI6MTk2MzAwMjYwNn0.dS8sUJP_a9zNzCzTFKy1YJ1W5tYbvudBoWWu5eW3J-M'

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
window.userToken = null

document.addEventListener('DOMContentLoaded', function (event){
    var signUpForm = document.querySelector('#sign-up')
})