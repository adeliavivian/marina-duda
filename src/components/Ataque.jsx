import React from 'react';
import './Ataque.css';

const Ataque = () => {
  return (
    <div className="ataque-container">
      <header className="ataque-header">
        <h1> Ataques de Força Bruta: O que são?</h1>
        <p>Saiba como os atacantes tentam adivinhar suas senhas e como se proteger!</p>
      </header>

      <main className="ataque-content">
        <section className="ataque-info">
          <h2> O que é um Ataque de Força Bruta?</h2>
          <p>
            Um ataque de **força bruta** é uma tentativa de descobrir uma senha através de tentativas sucessivas até encontrar a combinação correta. A ideia é tentar todas as combinações possíveis, o que pode ser muito demorado dependendo da complexidade da senha.
          </p>
        </section>

        <section className="ataque-mechanism">
          <h2> Como Funciona?</h2>
          <p>
            Em um ataque de força bruta, os hackers usam ferramentas automáticas que tentam milhares ou até bilhões de combinações de senhas em busca da senha certa. Senhas simples e óbvias, como "123456" ou "senha", são especialmente vulneráveis.
          </p>
        </section>

        <section className="ataque-dicas">
          <h2> Dicas para Se Proteger</h2>
          <ul>
            <li><span>✔️</span> Use senhas longas e complexas, com letras maiúsculas, minúsculas, números e símbolos.</li>
            <li><span>✔️</span> Ative a **autenticação de dois fatores (2FA)** em suas contas sempre que possível.</li>
            <li><span>✔️</span> Evite usar senhas óbvias, como seu nome ou data de nascimento.</li>
            <li><span>✔️</span> Altere suas senhas regularmente, especialmente após qualquer sinal de atividade suspeita.</li>
            <li><span>✔️</span> Use gerenciadores de senhas para gerar e armazenar senhas fortes.</li>
          </ul>
        </section>

        <section className="ataque-o-que-fazer">
          <h2> O que Fazer se For Vítima de um Ataque?</h2>
          <ol>
            <li><span></span> Mude a senha imediatamente, especialmente se ela for usada em várias contas.</li>
            <li><span></span> Habilite a autenticação de dois fatores (2FA) para adicionar uma camada extra de segurança.</li>
            <li><span></span> Fique atento a atividades suspeitas em suas contas, como logins desconhecidos.</li>
            <li><span></span> Consulte um especialista em segurança cibernética se precisar de ajuda.</li>
          </ol>
        </section>
      </main>

      <footer className="ataque-footer">
        <p>Desenvolvido por: Ana e Lucas</p>
      </footer>
    </div>
  );
}

export default Ataque;
