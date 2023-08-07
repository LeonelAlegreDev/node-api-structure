const getIndexPage = (req, res) => {
    const data = {
      pageTitle: 'Página de Inicio',
      welcomeMessage: 'Bienvenido a nuestra aplicación con SSR!'
    };
    res.render('../../views/pages/index.ejs', { layout: 'layout', ...data });
};

module.exports = { getIndexPage };