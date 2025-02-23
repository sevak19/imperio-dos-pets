import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, numero, mensagem } = body;

    // Configuração do transporte de e-mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bernardomasca3008@gmail.com", // Seu email
        pass: "fjsn vkbd fxqe rwtv", // Senha de aplicativo gerada
      },
    });
    

    // Configuração do e-mail
    const mailOptions = {
      from: "seu-email@gmail.com", // O e-mail do remetente
      to: "bernardomasca3008@gmail.com", // O seu e-mail (destinatário)
      subject: "Novo Agendamento",
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone de contato: ${numero}\nMensagem: ${mensagem}`,
    };
    

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    return NextResponse.json({ message: "Erro ao enviar mensagem.", error }, { status: 500 });
  }
}

