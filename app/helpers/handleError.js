const httpError = (res, err) => {
    console.log(err);
    if(err.code === 11000 && err.keyPattern.email === 1) {
        res.status(422).send({ message: 'El correo electrónico ya está en uso' });
    }
    else{
        res.status(500).send({ error: 'Algo ocurrio' });
    }
}

module.exports = { httpError }