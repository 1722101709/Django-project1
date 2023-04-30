function button()
{
  var user_regex=/^[a-zA-Z0-9_\-.+]{1,25}@[a-z]{5}.[a-z]{1,3}$/
  var psw_regex=/^[a-zA-Z0-9]{8,16}$/
  var username=document.getElementById('username').value;
  var password1=document.getElementById('password1').value;
  var password2=document.getElementById('password2').value;

  if(!username || !password1 || !password2)
  {
    alert("none of the username or password or confirm_password should be blank");
  }

  else if(username.match(user_regex))
  {
    if(password1.match(psw_regex))
    {
      if(password1==password2)
      {
         document.getElementById('form').submit();
      }
       else
       {
         alert("password and confirm password should be same");
       }
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
