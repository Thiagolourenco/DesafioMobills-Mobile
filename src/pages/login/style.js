import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #3867d6;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  padding: 0 25px;
`;

export const FormInput = styled.View`
  background-color: rgba(255, 255, 255, 0.85);
  height: 54px;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 15px;
  align-items: center;
  padding-left: 10px;
`;

export const Input = styled.TextInput`
  color: #000;
  margin-left: 10px;
  flex: 1;
  font-size: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
`;

export const ButtonEntrar = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: rgba(53, 70, 171, 0.94);
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 26px;
`;

export const ButtonCadastro = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: rgba(192, 69, 69, 0.94);
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const CadastrarText = styled.Text`
  color: rgba(119, 123, 126, 0.9);
  font-size: 13px;
  font-weight: bold;
  margin-top: 120px;
`;

export const MessageError = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  color: rgba(192, 69, 69, 0.94);
`;
