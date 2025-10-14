// // import { EmailTemplate } from '@/components/ui/EmailTemplate';
// // import { Resend } from 'resend';

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // export default async function handler(req, res) {
// //   try {
// //     const { name, email, message } = req.body;

// //     const { data, error } = await resend.emails.send({
// //       from: 'ZonaWeb <contacto@zonweb.site>', // usa un dominio verificado
// //       to: ['marco_95_5@yahoo.com'], // el correo donde querés recibir los mensajes
// //       subject: `Nuevo mensaje de ${name}`,
// //       react: EmailTemplate({ name, email, message }), // tu componente de plantilla
// //     });

// //     if (error) {
// //       console.error(error);
// //       return res.status(400).json({ error });
// //     }

// //     res.status(200).json({ success: true, data });
// //   } catch (err) {
// //     console.error('Error en sendEmail API:', err);
// //     res.status(500).json({ error: 'Error interno del servidor' });
// //   }
// // }

// // /pages/api/send.js o /app/api/send/route.js
// import { EmailTemplate } from '@/components/ui/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend("re_FewRQo9W_FFmCXruEnDYVdtURN3k9qzgV");

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Método no permitido' });
//   }

//   try {
//     const { name, email, message } = req.body;

//     // Envío de correo usando remitente de prueba de Resend
//     const { data, error } = await resend.emails.send({
//       from: 'ZonaWeb <onboarding@resend.dev>', // remitente de prueba
//       to: ['marco_95_5@yahoo.com'],             // tu correo personal donde recibís los mensajes
//       subject: `Nuevo mensaje de ${name}`,
//       react: <EmailTemplate name={name} email={email} message={message} />, // plantilla
//     });

//     if (error) {
//       console.error('Error en Resend:', error);
//       return res.status(400).json({ error });
//     }

//     return res.status(200).json({ success: true, data });
//   } catch (err) {
//     console.error('Error en sendEmail API:', err);
//     return res.status(500).json({ error: 'Error interno del servidor' });
//   }
// }






































