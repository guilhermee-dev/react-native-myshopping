import React from 'react';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

interface ButtonSigin {
  handleAuthLogin: () => void;
}

export function SignIn({ handleAuthLogin }: ButtonSigin) {
  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
      />

      <Input
        placeholder="senha"
        keyboardType="email-address"
      />

      <Button title="Entrar" onPress={handleAuthLogin} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={() => { }} />
        <ButtonText title="Criar minha conta" onPress={() => { }} />
      </Account>
    </Container>
  );
}