/* GET 'home' page*/
const homelist =(req,res) =>{
    res.render('homepage',{title :'Homepage'});
};
const loginPost = (req, res) => {
    // Process login form data here
    // If login is successful, redirect to the homepage
    res.redirect('/'); // Replace '/' with the actual URL of your homepage
};
/* GET 'Login' page*/
const login =(req,res) =>{
    res.render('login',{title :'Login'});
};
/* GET 'Registeration' page*/
const register =(req,res) =>{
    res.render('registeration',{title :'Registeration'});
};
/* GET 'Gaming' page*/
const gaming =(req,res) =>{
    res.render('game',{title :'Gaming'});
};
module.exports = {
    homelist,
    login,
    register,
    gaming,
    loginPost
};