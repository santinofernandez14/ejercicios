function validar(user, pass) {

    let patronUser = /^[A-Z].*(\d.*\d.*\d|.*\d.*\d.*\d)/

    let patronPass = /^\d.{6,}[A-Z]\d$/

    if (patronUser.test(user) && patronPass.test(pass)) {
        alert("Datos validos")
    } else {
        alert("Datos incorrectos")
    }
}