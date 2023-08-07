const getUsersPage = (req, res) => {
    const data = {
      pageTitle: 'Página Usuarios',
      welcomeMessage: 'Bienvenido a index/users'
    };
    res.render('../../views/pages/users.ejs', { layout: 'layout', ...data });
};

module.exports = { getUsersPage };