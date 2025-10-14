
export function EmailTemplate({ name, email, message }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', color: '#333' }}>
      <h2>Nuevo mensaje de {name}</h2>
      <p><strong>Correo:</strong> {email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>{message}</p>
    </div>
  );
}
