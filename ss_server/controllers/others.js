/*GET 'about' page*/
const about =(req,res) =>{
    res.render('about',{title:'About'});
};
/*GET 'new_seasons' page*/
const New_Seasons =(req,res) =>{
    res.render('new_seasons',{title:'new_seasons'});
};
module.exports={
    about,
    New_Seasons
};