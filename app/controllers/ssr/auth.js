const getRegisterPage = (req, res) => {
    const data = {
      pageTitle: 'Página de Registro',
      welcomeMessage: 'Registrarse!'
    };
    res.render('../../views/pages/register.ejs', { layout: 'layout', ...data });
};

module.exports = { getRegisterPage };