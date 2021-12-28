const campoRequerido = (input) => {
    if (input.trim().length > 0) {
      return false;
    } else {
      return true;
    }
  };
  const validarCorreo = (dato) => {
    let patron =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (patron.test(dato)) {
      return true;
    } else {
      return false;
    }
  };
  
  function validarImagen(input) {
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if (input.value.trim().length > 0 && patron.test(input.value.trim())) {
      return true;
    } else {
      return false;
    }
  }
  
  export { campoRequerido, validarImagen, validarCorreo };