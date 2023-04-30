function button()
{
  var user_regex=/^[a-zA-Z0-9.]{1,50}@[a-z]{5}.[a-z]{1,3}$/
  var psw_regex=/^[a-zA-Z0-9]{8,16}$/
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  if(!username || !password)
  {
    alert("none of the username or password should be blank");
  }
  else if(username.match(user_regex))
  {
    if(password.match(psw_regex))
    {
      document.getElementById('form').submit();
    }
    else
    {
      alert("password length should be atleast 8 with numbers or letters or both");
    }
  }
  else
  {
   alert("username must be an email with max length of 35");
  }
}