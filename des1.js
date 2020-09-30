var banco_cliente = "BancoPichincha";
var cuenta_cliente = true;
var saldo_cliente = 1000200;
var banco_destino = "BancoPacifico";
var cuenta_destino = true;

var monto_de_transferencia = 1000000;

var hora_de_transferencia = 10;

if ((hora_de_transferencia >= 9 && hora_de_transferencia <= 12) || (hora_de_transferencia >= 15 && hora_de_transferencia <= 20))
{
  alert("Su horario de transferencia es correcto.");
  if (cuenta_cliente)
  {
    if (cuenta_destino)
    {

      if (saldo_cliente >= monto_de_transferencia)
      {
        if (banco_cliente == banco_destino)
        {
          var total_transferencia = monto_de_transferencia;
          alert("Su costo de transaccion es cero " + total_transferencia);
          saldo_cliente = saldo_cliente - total_transferencia;
          alert("Transaccion realizada con exito. Su saldo actual es: $" + saldo_cliente);
        }
        else
        {
          var costo_de_transaccion = 100;
          var total_transferencia = monto_de_transferencia + costo_de_transaccion;
          alert("Su costo de transaccion es de cien dolares " + total_transferencia);
          if (saldo_cliente >= total_transferencia)
          {
            saldo_cliente = saldo_cliente - total_transferencia;
            alert("Transaccion realizada con exito. Su saldo actual es: $" + saldo_cliente);
          }
          else
          {
            alert("No es posible realizar la transaccion, fondos insuficientes.");
          }
        }
      }
      else
      {
        alert("No es posible realizar la transaccion, fondos insuficientes.");
      }
    }
    else
    {
      alert("No existe la cuenta destino.");
    }
  }
  else
  {
    alert("No es un cliente verificado.");
  }
}
else
{
  alert("Esta fuera del horario de transferecia, no es posible realizar la transaccion.");
}
