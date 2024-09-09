import React, { createContext, useState } from 'react';

const CuentaContext = createContext();

export const CuentaProvider = ({ children }) => {
  const [cuentaInfo, setCuentaInfo] = useState({
    numeroCuenta: '',
    idCuenta: null,
    saldo: '',
    estado: ''
  });

    const opciones = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    const formato = new Intl.NumberFormat('en-US', opciones);   

  const actualizarSaldo = (saldoActualizado) => {
    setCuentaInfo(prevState => ({
      ...prevState,
      saldo: formato.format(saldoActualizado)
    }));
  };

  const setSaldo = (saldoActualizado) => {
    setCuentaInfo(prevState => ({
      ...prevState,
      saldo: saldoActualizado
    }));
  };

  const actualizarEstado = (estadoActualizado) => {
    setCuentaInfo(prevState => ({
      ...prevState,
      estado: estadoActualizado
    }));
  };
  
  const actualizarNumeroCuenta = (cuentaActualizada) => {
    setCuentaInfo(prevState => ({
      ...prevState,
      numeroCuenta: cuentaActualizada
    }));
  };

  const actualizarCuentaId = (idActualizado) => {
    setCuentaInfo(prevState => ({
      ...prevState,
      idCuenta: idActualizado
    }));
  };

  return (
<CuentaContext.Provider value={{ cuentaInfo, setSaldo, actualizarSaldo, actualizarCuentaId, actualizarNumeroCuenta, actualizarEstado}}>
      {children}
    </CuentaContext.Provider>
  );
};

export default CuentaContext;
